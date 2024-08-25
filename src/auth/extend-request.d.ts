export interface UserWallet {
    address: string;
    signature: string;
    nonce: string;
    chainId: number;
}

declare module 'express-serve-static-core' {
    export interface Request {
        wallet?: UserWallet
    }
 }

