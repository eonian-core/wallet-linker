import { RequestHandler } from "express";
import { nonceStore } from "./nonce";
import { SignatureValidator } from "./signature-validator";
import { SignatureTokenDecoder } from "./signature-token-decoder";
import { SwtStrategy, SwtStrategyOptions } from "./swt-strategy";


/** Expect signaute of 'Sign in with wallet to Eonian' with "x-nonce" send in "x-signature" header */
export const siweAuth = (options: SwtStrategyOptions): RequestHandler => async (req, res, next) => {
    const validator = new SignatureValidator(nonceStore);
    const decoder = new SignatureTokenDecoder();

    const strategy = new SwtStrategy(validator, decoder, options);
    
    return await strategy.authenticate(req, res, next);
}
