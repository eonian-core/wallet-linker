import { Request, Response, NextFunction } from "express";
import { SiweError, SiweErrorType } from 'siwe';
import { SignatureTokenDecoder } from "./signature-token-decoder";
import { SignatureValidator } from "./signature-validator";


// TODO: siwtch to authorization header
const SIWE_AUTH_HEADER = 'x-signature';

export interface SwtStrategyOptions {
    skipOnMissingSignature?: boolean;
    allowedOrigins: Array<string | RegExp>; 
}
export interface ISwtStrategy {
    authenticate(req: Request, res: Response, next: NextFunction): void;
}


/** SWT Strategy: SIWE authentiacation strategy that uses JWT-like approach for authneticaiton */
export class SwtStrategy implements ISwtStrategy {

    constructor(
        private validator: SignatureValidator,
        private decoder: SignatureTokenDecoder,
        private options: SwtStrategyOptions
    ) {}

    async authenticate(req: Request, res: Response, next: NextFunction) {
        const signatureToken = req.header(SIWE_AUTH_HEADER);

        if(!signatureToken) {
            if(!this.options.skipOnMissingSignature) {
                throw new Error('Signature not provided');   
            }
            console.log('Signature not provided, will skip');
            return next();
        }
        
        try {
            console.log('Signature found, will decode and validate');
            const {payload, signature} = this.decoder.decode(signatureToken);

            const uri = getOriginalDomain(req);
            req.wallet = await this.validator.validateSignature(payload, signature, uri, this.options.allowedOrigins, new Date());
            console.log('Signature is valid', req.wallet);
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
}




export const getOriginalDomain = (req: Request): string => 
    req.header('origin') 
    || req.header('x-forwarded-host') 
    || req.header('host') 
    || 'localhost';

