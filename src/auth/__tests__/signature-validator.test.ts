import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { SiweMessage } from 'siwe';
import { NonceStore } from '../nonce';
import { SignatureValidator, SIGN_STATMENT } from '../signature-validator';

describe('SignatureValidator', () => {

  let store: NonceStore;
  let validator: SignatureValidator

  describe('first address', () => {
    const allowedOrigins = ['localhost:3000', /.*\.eonian\.com$/];
    const currentTime = new Date('2024-08-23T00:57:33.182Z');
    const uri = 'http://localhost:3000'

    const signature = '0xad823784859fc6357ed7bcfdb237c02a3a35e69d6167e7bce572ca4d020ab31e69c1efbb8b27ae74a12e5533ab32a689cb9bf9b6287d9bc72dedc74d235cdac11c'
    const nonce = 'YpFWdFOclv75pN6Yn'
    const address = '0x2603B2E72A41b059344F5a7FbA52a0a1298E175e'
    const chainId = 56;

    let payload: Partial<SiweMessage>

    beforeEach(() => {
      store = new NonceStore()
      store.add(nonce);

      validator = new SignatureValidator(store);

      payload = {
        statement: SIGN_STATMENT,
        uri,
        domain: 'localhost:3000',
        version: '1',
        chainId,
        nonce,
        issuedAt: '2024-08-23T00:51:11.913Z',
        expirationTime: '2024-08-23T03:01:11.907+02:00',
        address,
      }
    })

    it('should return user if signature is valid', async () => {
      const user = await validator.validateSignature(payload, signature, uri, allowedOrigins, currentTime);
      expect(user).toEqual({
        address,
        signature,
        nonce,
        chainId,
      });
    });

    it('should throw error if signature verification fails', async () => {
      const invalidSignature = '0xinvalid';
      try {
        // regular expect cannot catch the error by some reason
        const message = await validator.validateSignature(payload, invalidSignature, uri, allowedOrigins, currentTime)
        expect(message).toBeUndefined();
      } catch (error) {
        expect(error).toBeDefined();
      }
    });

    it('should throw error if nonce does not exist', async () => {
      store.remove(nonce);
      await expect(async () => await validator.validateSignature(payload, signature, uri, allowedOrigins, currentTime))
        .rejects.toThrow(`Nonce ${nonce} not exists or expired`);
    });

    it('should throw error if statement is invalid', async () => {
      payload.statement = 'INVALID_STATEMENT';

      try {
        // regular expect cannot catch the error by some reason
        const message = await validator.validateSignature(payload, signature, uri, allowedOrigins, currentTime)
        expect(message).toBeUndefined();
      } catch (error) {
        expect(error).toBeDefined();
      }
    });

    it('should throw error if URI does not match', async () => {
      const invalidUri = 'http://invalid.com';
      await expect(async () => await validator.validateSignature(payload, signature, invalidUri, allowedOrigins, currentTime))
        .rejects.toThrow(`Request URI ${invalidUri} does not match provided URI ${payload.uri} for verification.`);
    });

    it('should throw error if domain does not match', async () => {
      payload.domain = 'invalid.com';
      try {
        const message = await validator.validateSignature(payload, signature, uri, allowedOrigins, currentTime);
        expect(message).toBeUndefined();
      } catch (error) {
        expect(error).toBeDefined();
      }
    });

    it('should throw error if message is not yet valid', async () => {
      const futureTime = new Date('2024-08-23T00:50:00.000Z'); // Time before the issuedAt time
      await expect(validator.validateSignature(payload, signature, uri, allowedOrigins, futureTime))
        .rejects.toThrow('Message not yet issued');
    });

    it('should throw error if message is expired', async () => {
      const pastTime = new Date('2024-08-23T04:00:00.000Z'); // Time after the expirationTime
      try {
        await expect(validator.validateSignature(payload, signature, uri, allowedOrigins, pastTime)).rejects.toThrow();
      } catch (error) {
        console.error(error);
      }
    });

  });

  describe('second address', () => {
    const allowedOrigins = ['localhost:3000', /.*\.eonian\.com$/];
    const currentTime = new Date('2024-08-24T02:46:48.801Z');
    const uri = 'http://localhost:3000'

    const signature = '0xf4a19d8f2f992e013721780028f4f5148b9ce0b2fe455a8015ffd4d61aebeace38fd24f6fa9e897cf3e8c8b470ec30f6e65d037b51f2cd566b432085155644421b'
    const nonce = '9B9wXm8yR3ptW81rV'

    let payload: Partial<SiweMessage>

    beforeEach(() => {
      store = new NonceStore()
      store.add(nonce);

      validator = new SignatureValidator(store);

      payload = {
        statement: SIGN_STATMENT,
        uri,
        domain: 'localhost:3000',
        version: '1',
        chainId: 56,
        nonce,
        issuedAt: '2024-08-24T02:40:41.990Z',
        expirationTime: '2024-08-24T04:50:41.986+02:00',
        address: '0xC6B0cAF13279762a98045b37654998fbCFEf97F7',
      }
    })

    it('should throw error if address of signer does not match payload', async () => {

      try {
        // regular expect cannot catch the error by some reason
        const message = await validator.validateSignature(payload, signature, uri, allowedOrigins, currentTime)
        expect(message).toBeUndefined();
      } catch (error) {
        expect(error).toBeDefined();
      }
    });
  })


});