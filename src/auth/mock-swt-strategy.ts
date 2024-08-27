import { ISwtStrategy } from "./swt-strategy";

export const MOCK_ADDRESS_HEADER = 'x-address';
export const MOCK_CHAIN_ID_HEADER = 'x-chain-id';

export class MockSwtStrategy implements ISwtStrategy {
    async authenticate(req: any, res: any, next: any) {
        const address = req.header(MOCK_ADDRESS_HEADER);
        const chainId = req.header(MOCK_CHAIN_ID_HEADER);

        if(!address || !chainId) {
            console.log('Mock address or chain id not provided, will skip');
            return next();
        }

        req.wallet = {address, chainId: Number(chainId), signature: 'mock-signature', nonce: 'mock-nonce'};
        next();
    }
}