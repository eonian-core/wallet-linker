import { describe, it, expect } from "@jest/globals";
import { maskEmailForPreview } from "../mask-email";


describe('maskEmailForPreview', () => {
    it('should mask the email correctly', () => {
        const email = 'john.doe@example.com';
        const maskedEmail = maskEmailForPreview(email);
        expect(maskedEmail).toBe('joh***@e***.com');
    });

    it('should handle email with multiple periods in domain', () => {
        const email = 'john.doe@sub.example.com';
        const maskedEmail = maskEmailForPreview(email);
        expect(maskedEmail).toBe('joh***@s***.com');
    });

    it('should handle short email addresses', () => {
        const email = 'jd@e.com';
        const maskedEmail = maskEmailForPreview(email);
        expect(maskedEmail).toBe('jd***@e***.com');
    });

    it('should handle email without domain', () => {
        const email = 'john.doe@';
        const maskedEmail = maskEmailForPreview(email);
        expect(maskedEmail).toBe('joh***@***.');
    });
});