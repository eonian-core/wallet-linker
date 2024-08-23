import { RequestHandler } from "express";
import { generateNonce, SiweMessage } from 'siwe';

class Store {
    data: Array<string> = []
    
    public add(value: string) {
        this.data.push(value);
    }

    public isExist(value: string) {
        return this.data.includes(value);
    }
}

const store = new Store();

export const nonceHandler: RequestHandler = async (req, res) => {
    const nonce = generateNonce();

    store.add(nonce);
    
    res.status(200).json({nonce});
}