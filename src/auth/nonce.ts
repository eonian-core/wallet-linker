import { RequestHandler } from "express";
import { generateNonce, SiweMessage } from 'siwe';

export class NonceStore {
    data: Array<string> = []
    
    public add(value: string) {
        this.data.push(value);
    }

    public isExist(value: string) {
        return this.data.includes(value);
    }
}

export const nonceStore = new NonceStore();

export const nonceHandler: RequestHandler = async (req, res) => {
    const nonce = generateNonce();

    nonceStore.add(nonce);
    
    res.status(200).json({nonce});
}