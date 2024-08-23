export interface UserWallet {
    address: string;
    signature: string;
    nonce: string;
    chainId: number;
}

export interface User {
    wallet?: UserWallet
}

declare module 'express-serve-static-core' {
    export interface Request {
       user?: User
    }
 }

