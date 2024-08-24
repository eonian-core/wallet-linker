import 'reflect-metadata'
import 'dotenv/config'

import cors from 'cors'
import express from 'express';

import { startGraphql } from './graphql';
import { startExpress } from './express';
import * as config from './config';
import { nonceHandler } from './auth/nonce';
import { siweAuth } from './auth/siwe-auth';

console.log(`Starting server in ${config.isProduction ? 'production' : 'development'} mode`)

const startApp = async () => {

  const app: express.Express = express();

  app.use(express.json({ limit: '50mb' }))
  app.use(cors({ origin: config.allowedOrigins }))

  app.use(siweAuth({
    skipOnMissingSignature: true, 
    allowedOrigins: config.allowedOrigins
  }))

  // allow to get nonce for signature verification
  app.get('/nonce', nonceHandler) 

  await startGraphql(app, '/graphql')

  const { url } = await startExpress(app, config.port)
  console.log(`
    🚀 Server ready at: ${url}
    ⭐️  See sample queries: http://pris.ly/e/ts/graphql-typegraphql#using-the-graphql-api`
  )
}

startApp()


