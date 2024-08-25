import { describe, it, expect } from "@jest/globals";
import { splitRedisUrl } from "../redis";

describe('splitRedisUrl', () => {
    it('should correctly split a valid Redis URL', () => {
        const url = 'redis://username:password@localhost:6379';
        const result = splitRedisUrl(url);
        expect(result).toEqual({
            host: 'localhost',
            port: 6379,
            username: 'username',
            password: 'password'
        });
    });

    it('should throw an error for an invalid Redis URL', () => {
        const url = 'invalid-url';
        expect(() => splitRedisUrl(url)).toThrow('Invalid Redis URL');
    });
});