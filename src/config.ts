
export const isProduction = process.env.NODE_ENV !== 'development'
console.log(`Starting server in ${isProduction ? 'production' : 'development'} mode`)

export const port = +(process.env.PORT || "4000")

export const allowedOrigins = [
    /.*:\/\/localhost:.*/, /localhost:.*/, // localhost:3000 -> web app development server
    /^(https?:\/\/)?([a-zA-Z0-9.-]+\.)?eonian\.finance(\/[a-zA-Z0-9\/]*)?$/,
    /^(https?:\/\/)?([a-zA-Z0-9.-]+\.)?eonian\.io(\/[a-zA-Z0-9\/]*)?$/,
    /^(https?:\/\/)?([a-zA-Z0-9-]+-eonian\.)vercel\.app(\/[a-zA-Z0-9\/]*)?$/, // preview environment
]
console.log(`Allowed origins: ${allowedOrigins.join(', ')}`)

export const redisUrl = process.env.REDIS_URL!
if(!redisUrl) {
    throw new Error('REDIS_URL is not provided')
}

const ONE_MINUTE = 60 * 1000 // in milliseconds
export const nonceTtl = +(process.env.NONCE_TTL || 10 * ONE_MINUTE)
console.log(`Nonce TTL: ${nonceTtl}ms`)