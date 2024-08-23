import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { SIGN_STATMENT, SignatureValidator } from '../siwe-auth';
import { SiweMessage } from 'siwe';
import { NonceStore } from '../nonce';

describe('validateSignature', () => {

    let store: NonceStore;
    let validator: SignatureValidator

    beforeEach(() => {
        store = new NonceStore()
        validator = new SignatureValidator(store);
    })

  it('should return user if signature is valid', async () => {
    const allowedOrigins = ['localhost:3000', /.*\.eonian\.com$/];
    const currentTime = new Date('2024-08-23T00:57:33.182Z');
    const uri = 'http://localhost:3000'
    
    const signature = '0xad823784859fc6357ed7bcfdb237c02a3a35e69d6167e7bce572ca4d020ab31e69c1efbb8b27ae74a12e5533ab32a689cb9bf9b6287d9bc72dedc74d235cdac11c'
    const nonce = 'YpFWdFOclv75pN6Yn'
    const address = '0x2603B2E72A41b059344F5a7FbA52a0a1298E175e'
    const chainId = 56;

    const payload: Partial<SiweMessage> = {
        statement: SIGN_STATMENT,
        uri,
        domain: 'localhost:3000',
        version: '1',
        chainId,
        nonce,
        issuedAt:  '2024-08-23T00:51:11.913Z',
        expirationTime: '2024-08-23T03:01:11.907+02:00',
        address,
    }
    
    store.add(nonce);

    const user = await validator.validateSignature(payload, signature, uri, allowedOrigins, currentTime);
    expect(user).toEqual({
      wallet: {
        address,
        signature,
        nonce,
        chainId,
      },
    });
  });
  
});