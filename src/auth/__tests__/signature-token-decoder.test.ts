import { describe, beforeEach, it, expect } from "@jest/globals";
import { SignatureTokenDecoder } from "../signature-token-decoder";


describe('SignatureTokenDecoder', () => {
    let decoder: SignatureTokenDecoder;

    beforeEach(() => {
        decoder = new SignatureTokenDecoder();
    });

    it('should decode a valid signature token', () => {
        const payload = { foo: 'bar' };
        const signature = 'validSignature';
        const signatureToken = `${Buffer.from(JSON.stringify(payload)).toString('base64')}.${signature}`;

        const result = decoder.decode(signatureToken);

        expect(result).toEqual({
            payload,
            signature
        });
    });

    it('should throw an error when the signature token is invalid', () => {
        const invalidSignatureToken = 'invalidSignatureToken';

        expect(() => decoder.decode(invalidSignatureToken)).toThrowError('Invalid signature token');
    });

    it('should throw an error when the signature token is missing a part', () => {
        const missingPartSignatureToken = 'missingPartSignatureToken.';

        expect(() => decoder.decode(missingPartSignatureToken)).toThrowError('Invalid signature token');
    });
});