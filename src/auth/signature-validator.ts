import { SiweMessage } from "siwe";
import { UserWallet } from "./extend-request";
import { NonceStore } from "./nonce";
import {ethers} from 'ethers';

export const SIGN_STATMENT = 'Sign in with wallet to Eonian'

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
        // message is signed correctly
        // need check payload for validity

        if(!(await this.store.isExist(message.nonce))) {
            throw new Error(`Nonce ${message.nonce} not exists or expired`);
        }
    
        if(message.statement !== SIGN_STATMENT) {
            throw new Error(`Invalid statement: received ${message.statement}, expected ${SIGN_STATMENT}`);
        }
    
        if(message.uri !== uri) {
            throw new Error(`Request URI ${uri} does not match provided URI ${message.uri} for verification.`)
        }
    
        const domain = new URL(uri).host;
        if(message.domain !== domain) {
            throw new Error(`URI domain ${domain} does not match provided domain ${message.domain} for verification.`)
        }

        if(!isAllowedOrigin(domain, allowedOrigins)) {
            throw new Error(`Origin ${domain} not allowed`);
        }

        if(!message.issuedAt) {
            throw new Error('Message not have issued time')
        }

        if(new Date(message.issuedAt).getTime() > curentTime.getTime()) {
            throw new Error(`Message not yet issued: issuedTime: ${message.issuedAt}, currentTime: ${curentTime.toISOString()}`)
        }
    
        if (message.notBefore && new Date(message.notBefore).getTime() > curentTime.getTime()) {
            throw new Error(`Message not yet valid: notBefore: ${message.notBefore}, currentTime: ${curentTime.toISOString()}`)
        }

        if(!message.expirationTime) {
            throw new Error('Message not have expiration time')
        }
    
        if (message.expirationTime && new Date(message.expirationTime).getTime() < curentTime.getTime()) {
            throw new Error(`Message expired: expirationTime: ${message.expirationTime}, currentTime: ${curentTime.toISOString()}`)
        }

        const address = ethers.verifyMessage(signMessage.prepareMessage(), signature)
        if(address !== message.address) {
            throw new Error(`Signature does not match address of the message: ${address} !== ${message.address}`)
        }
    
        return {
            address: address.toLowerCase(),
            signature,
            nonce: message.nonce,
            chainId: message.chainId
        }
    }
}

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
