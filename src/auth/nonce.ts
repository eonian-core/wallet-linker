import Keyv from 'keyv';
import { Request, Response } from "express";
import { generateNonce } from 'siwe';

export class NonceStore {
    constructor(private store: Keyv) {}
    
    public async add(value: string) {
        return await this.store.set(value, "true");
    }

    public async isExist(value: string) {
        return (await this.store.get(value)) === 'true';
    }

    public async remove(value: string) {
        return await this.store.delete(value);
    }
}

export class NonceGenerator {
    constructor(private store: NonceStore) {}

    public async generateNonce(req: Request, res: Response) {
        const nonce = generateNonce();

        await this.store.add(nonce);
        
        res.status(200).json({nonce});
    }
}