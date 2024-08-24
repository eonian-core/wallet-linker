import { SiweMessage } from "siwe";

export interface DecodedSignatureToken {
    payload: Partial<SiweMessage>, 
    signature: string
}

export class SignatureTokenDecoder {
    public decode(signatureToken: string): DecodedSignatureToken{
        const [payload, signature] = signatureToken.split('.');
        if(!payload || !signature) {
            throw new Error('Invalid signature token');
        }

        return {
            payload: JSON.parse(Buffer.from(payload, 'base64').toString()),
            signature: signature
        }
    }
}
