
export const isProduction = process.env.NODE_ENV !== 'development'
console.log(`Starting server in ${isProduction ? 'production' : 'development'} mode`)

export const port = +(process.env.PORT || "4000")
// localhost:3000 -> web app development server
export const allowedOrigins = [
    /.*:\/\/localhost:.*/, /localhost:.*/, 
    /^(https?:\/\/)?eonian\.finance(\/[a-zA-Z0-9\/]*)?$/,
    /^(https?:\/\/)?eonian\.io(\/[a-zA-Z0-9\/]*)?$/,
]
console.log(`Allowed origins: ${allowedOrigins.join(', ')}`)

export const redisUrl = process.env.REDIS_URL!
if(!redisUrl) {
    throw new Error('REDIS_URL is not provided')
}

const ONE_MINUTE = 60 * 1000 // in milliseconds
export const nonceTtl = +(process.env.NONCE_TTL || 10 * ONE_MINUTE)
console.log(`Nonce TTL: ${nonceTtl}ms`)