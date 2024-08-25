import { Request, Response, NextFunction } from "express";
import { SiweError, SiweErrorType } from 'siwe';
import { describe, beforeEach, jest, it, expect } from "@jest/globals";
import { SignatureTokenDecoder } from "../signature-token-decoder";
import { SignatureValidator } from "../signature-validator";
import { SwtStrategyOptions, SwtStrategy } from "../swt-strategy";

describe('SwtStrategy', () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let mockNextFunction: NextFunction;
    let mockValidator: SignatureValidator;
    let mockDecoder: SignatureTokenDecoder;
    let options: SwtStrategyOptions;

    beforeEach(() => {
        mockRequest = {
            header: jest.fn().mockReturnValue(undefined) as any,
        };
        mockResponse = {
            status: jest.fn().mockReturnThis() as any,
            json: jest.fn() as any,
        };
        mockNextFunction = jest.fn();
        mockValidator = { validateSignature: jest.fn() } as unknown as SignatureValidator;
        mockDecoder = { decode: jest.fn() } as unknown as SignatureTokenDecoder;
        options = { allowedOrigins: ['localhost'] };
    });

    it('should throw an error if signature is not provided and skipOnMissingSignature is false', async () => {
        const strategy = new SwtStrategy(mockValidator, mockDecoder, options);
        await expect(strategy.authenticate(mockRequest as Request, mockResponse as Response, mockNextFunction)).rejects.toThrow('Signature not provided');
    });

    it('should call next function if signature is not provided and skipOnMissingSignature is true', async () => {
        options.skipOnMissingSignature = true;
        const strategy = new SwtStrategy(mockValidator, mockDecoder, options);
        await strategy.authenticate(mockRequest as Request, mockResponse as Response, mockNextFunction);
        expect(mockNextFunction).toHaveBeenCalled();
    });

    it('should validate and set wallet if signature is provided', async () => {
        const mockWallet = { id: 'testWallet' };
        
        (mockDecoder.decode as any).mockReturnValue({ payload: 'testPayload', signature: 'testSignature' });
        (mockValidator.validateSignature as any).mockResolvedValue(mockWallet);
        (mockRequest.header as any).mockReturnValueOnce('testToken').mockReturnValueOnce('localhost');

        const strategy = new SwtStrategy(mockValidator, mockDecoder, options);
        
        await strategy.authenticate(mockRequest as Request, mockResponse as Response, mockNextFunction);
        
        expect(mockDecoder.decode).toHaveBeenCalledWith('testToken');
        expect(mockValidator.validateSignature).toHaveBeenCalledWith('testPayload', 'testSignature', 'localhost', ['localhost'], expect.any(Date));
        expect(mockRequest.wallet).toBe(mockWallet);
        expect(mockNextFunction).toHaveBeenCalled();
    });
});