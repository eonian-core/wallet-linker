
export const isProduction = process.env.NODE_ENV !== 'development'

export const port = +(process.env.PORT || "4000")
// localhost:3000 -> web app development server
export const allowedOrigins = [`http://localhost:${port}`, `http://localhost:3000`, 'eonian.finance', /\.eonian\.finance$/, 'eonian.io', /\.eonian\.io$/]