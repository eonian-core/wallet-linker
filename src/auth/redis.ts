import KeyvRedis from "@keyv/redis"
import Redis, { RedisOptions } from "ioredis"
import { SwtAuth, SwtAuthOptions } from "./swt-auth";

export class SwtRedisAuth extends SwtAuth {
    /** Redis url like: "redis://default:prisma@localhost:6379" */
    constructor(redisUrl: string, options: SwtAuthOptions){
        // regular redis url not working with upstash DNS
        // need split it into params
        const redisOptions = splitRedisUrl(redisUrl)
        const redis = new Redis(redisOptions);
        
        const store = new KeyvRedis(redis)
        super(store, options)
    }
}

export const splitRedisUrl = (url: string): RedisOptions => {
    const match = url.match(/redis:\/\/(.*):(.*)@(.*):(.*)/);
    if (!match) {
        throw new Error('Invalid Redis URL');
    }
    const [_, username, password, host, port] = match;
    return {
        host,
        port: parseInt(port),
        username,
        password
    }
}