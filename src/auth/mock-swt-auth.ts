import { AbstractSwtAuth } from "./swt-auth";
import Keyv from "keyv";
import { MOCK_ADDRESS_HEADER, MOCK_CHAIN_ID_HEADER, MockSwtStrategy } from "./mock-swt-strategy";
import { NonceStore, NonceGenerator } from "./nonce";
import { ISwtStrategy } from "./swt-strategy";

export class MockSwtAuth extends AbstractSwtAuth {
    keyv: Keyv
    nonceStore: NonceStore
    nonceGenerator: NonceGenerator

    strategy: ISwtStrategy

    constructor(){
        super();
        console.log(`Will use mocked auth, provide ${MOCK_ADDRESS_HEADER} and ${MOCK_CHAIN_ID_HEADER} headers to authenticate`);
        this.strategy = new MockSwtStrategy();
        this.keyv = new Keyv({namespace: 'nonce'});
        this.nonceStore = new NonceStore(this.keyv);

        this.nonceGenerator = new NonceGenerator(this.nonceStore);
    }    
}