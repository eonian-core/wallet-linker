import { RequestHandler, Request } from "express";
import { SiweError, SiweErrorType, SiweMessage } from 'siwe';
import * as config from '../config';
import { User } from "./extend-request";

const SIWE_AUTH_HEADER = 'x-signature';
const SIWE_NONCE_HEADER = 'x-nonce';
const SIWE_ADDRESS_HEADER = 'x-address';

const SIGN_STATMENT = 'Sign in with wallet to Eonian'


/** Expect signaute of 'Sign in with wallet to Eonian' with "x-nonce" send in "x-signature" header */
export const siweAuthMiddleware: RequestHandler = async (req, res, next) => {
    const signature = req.header(SIWE_AUTH_HEADER);
    const nonce = req.header(SIWE_NONCE_HEADER);
    const address = req.header(SIWE_ADDRESS_HEADER);

    if(!signature || !nonce || !address) {
        return next();
    }

    try {
        const origin = getOriginalDomain(req);
        req.user = await validateSignature(address, 56, '', '', signature, origin, nonce, config.allowedOrigins, new Date());
        next();

        return;
    } catch (error) {
        console.error('Error during authentication', error);

        if(typeof error !== 'object') {
            return res.status(403).json({ message: error });
        }

        if(!(error instanceof SiweError)) {
            return res.status(403).json({ message: (error as Error)?.message || error });
        }

        switch (error.type) {
            case SiweErrorType.EXPIRED_MESSAGE: {
                res.status(440).json({ message: '`expirationTime` is present and in the past.' })
                return;
            }
            case SiweErrorType.INVALID_SIGNATURE: {
                res.status(422).json({ message: `Signature doesn't match the address of the message.` })
                return;
            }
            default: {
                res.status(403).json({ message: error.type })
                return
            }
        }
    }
    
}

export const validateSignature = async (address: string, chainId: number, expiresAt: string, issuedAt: string, signature: string, uri: string, nonce: string, allowedOrigins: Array<string | RegExp>, curentTime: Date): Promise<User> => {
    const domain = new URL(uri).host;
    console.log('domain', domain);
    if(!isAllowedOrigin(domain, allowedOrigins)) {
        throw new Error('Origin not allowed');
    }

    const signMessage = new SiweMessage({uri, domain, nonce, statement: SIGN_STATMENT, version: '1', address, chainId, expirationTime: expiresAt, issuedAt  });
    const { data: message, success, error } = await signMessage.verify({ signature, time: curentTime.toISOString() });
    if(!success || error) {
        throw error;
    }

    if(message.uri !== uri) {
        throw new Error('URI does not match provided URI for verification.')
    }

    if (message.notBefore && new Date(message.notBefore).getTime() > curentTime.getTime()) {
        throw new Error('Message not yet valid')
    }

    if (message.expirationTime && new Date(message.expirationTime).getTime() < curentTime.getTime()) {
        throw new Error('Message expired')
    }

    return {
        wallet: {
            address: message.address,
            signature,
            nonce,
            chainId: message.chainId
        }
    }
}

export const getOriginalDomain = (req: Request): string => 
    req.header('origin') 
    || req.header('x-forwarded-host') 
    || req.header('host') 
    || 'localhost';

export const isAllowedOrigin = (domain: string, allowedOrigins: Array<string | RegExp>): boolean => {
    for (const origin of allowedOrigins) {
        const isAllowed = origin instanceof RegExp 
            ? origin.test(domain) 
            : origin === domain

        if (isAllowed) {
            return true;
        }
    }

    return false;
}
