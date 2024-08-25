import KeyvRedis from "@keyv/redis"
import URL from 'url';
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
    const parsedUrl = URL.parse(url, true); // The second parameter enables query string parsing

    if (!parsedUrl.hostname || !parsedUrl.port || !parsedUrl.auth) {
        throw new Error('Invalid Redis URL');
    }

    const [username, password] = parsedUrl.auth.split(':');

    const query: any = { ...parsedUrl.query };
    if (query.family) {
        query.family = Number(query.family);
    }

    return {
        host: parsedUrl.hostname,
        port: Number(parsedUrl.port),
        username,
        password,
        ...query
    };
}