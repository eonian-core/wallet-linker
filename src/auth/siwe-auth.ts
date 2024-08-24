import { RequestHandler, Request } from "express";
import { SiweError, SiweErrorType, SiweMessage } from 'siwe';
import * as config from '../config';
import { UserWallet } from "./extend-request";
import { NonceStore, nonceStore } from "./nonce";

const SIWE_AUTH_HEADER = 'x-signature';

export const SIGN_STATMENT = 'Sign in with wallet to Eonian'


/** Expect signaute of 'Sign in with wallet to Eonian' with "x-nonce" send in "x-signature" header */
export const siweAuthMiddleware: RequestHandler = async (req, res, next) => {
    const validator = new SignatureValidator(nonceStore);
    
    const signature = req.header(SIWE_AUTH_HEADER);

    if(!signature) {
        return next();
    }

    try {
        const uri = getOriginalDomain(req);
        req.wallet = await validator.validateSignature({} as any, signature, uri, config.allowedOrigins, new Date());
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

        const errorMessage = {message: error.type};

        switch (error.type) {
            case SiweErrorType.EXPIRED_MESSAGE: {
                res.status(440).json(errorMessage)
                return;
            }
            case SiweErrorType.INVALID_SIGNATURE: {
                res.status(422).json(errorMessage)
                return;
            }
            default: {
                res.status(403).json(errorMessage)
                return
            }
        }
    }
    
}

export class SignatureValidator {
    private store: NonceStore;

    constructor(store: NonceStore) {
        this.store = store;
    }
    
    async validateSignature(payload: Partial<SiweMessage>, signature: string, uri: string, allowedOrigins: Array<string | RegExp>, curentTime: Date): Promise<UserWallet> {
        const signMessage = new SiweMessage(payload);
        const { data: message, success, error } = await signMessage.verify({ signature, time: curentTime.toISOString() });
        if(!success || error) {
            throw error;
        }

        if(!this.store.isExist(message.nonce)) {
            throw new Error('Nonce not exists or expired');
        }
    
        if(message.statement !== SIGN_STATMENT) {
            throw new Error('Invalid statement')
        }
    
        if(message.uri !== uri) {
            throw new Error('URI does not match provided URI for verification.')
        }
    
        const domain = new URL(uri).host;
        if(message.domain !== domain) {
            throw new Error('Domain does not match provided domain for verification.')
        }

        if(!isAllowedOrigin(domain, allowedOrigins)) {
            throw new Error('Origin not allowed');
        }

        if(!message.issuedAt) {
            throw new Error('Message not have issued time')
        }

        if(new Date(message.issuedAt).getTime() > curentTime.getTime()) {
            throw new Error('Message not yet issued')
        }
    
        if (message.notBefore && new Date(message.notBefore).getTime() > curentTime.getTime()) {
            throw new Error('Message not yet valid')
        }

        if(!message.expirationTime) {
            throw new Error('Message not have expiration time')
        }
    
        if (message.expirationTime && new Date(message.expirationTime).getTime() < curentTime.getTime()) {
            throw new Error('Message expired')
        }
    
        return {
            address: message.address,
            signature,
            nonce: message.nonce,
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
