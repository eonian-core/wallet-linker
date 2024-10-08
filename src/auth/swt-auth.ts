import Keyv, { KeyvStoreAdapter } from "keyv"
import { ISwtStrategy, SwtStrategy, SwtStrategyOptions } from "./swt-strategy"
import { NonceGenerator, NonceStore } from "./nonce"
import { SignatureTokenDecoder } from "./signature-token-decoder"
import { SignatureValidator } from "./signature-validator"
import { RequestHandler } from "express"


export interface SwtAuthOptions extends SwtStrategyOptions {
    ttl: number
}

export abstract class AbstractSwtAuth {
    abstract nonceGenerator: NonceGenerator
    abstract strategy: ISwtStrategy

    public nonceHandler(): RequestHandler {
        return async (req, res) => await this.nonceGenerator.generateNonce(req, res);
    }

    /** Expect signaute of 'Sign in with wallet to Eonian' with "x-nonce" send in "x-signature" header */
    public middleware(): RequestHandler {
        return async (req, res, next) => await this.strategy.authenticate(req, res, next);
    }
}

export class SwtAuth extends AbstractSwtAuth {
    keyv: Keyv
    nonceStore: NonceStore
    nonceGenerator: NonceGenerator

    validator: SignatureValidator
    decoder: SignatureTokenDecoder
    strategy: ISwtStrategy

    constructor(
        private store: KeyvStoreAdapter | Map<any, any> | any, 
        private options: SwtAuthOptions
    ) {
        super();
        this.keyv = new Keyv({store: this.store, ttl: this.options.ttl, namespace: 'nonce'});
        this.nonceStore = new NonceStore(this.keyv);

        this.nonceGenerator = new NonceGenerator(this.nonceStore);
    
        this.validator = new SignatureValidator(this.nonceStore);
        this.decoder = new SignatureTokenDecoder();
    
        this.strategy = new SwtStrategy(this.validator, this.decoder, this.options);
    }

}

