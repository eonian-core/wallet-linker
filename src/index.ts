import 'reflect-metadata'
import 'dotenv/config'

import cors from 'cors'
import express from 'express';

import { startGraphql } from './graphql';
import { startExpress } from './express';
import * as config from './config';
import { SwtRedisAuth } from './auth/redis';
import { AbstractSwtAuth } from './auth/swt-auth';
import { MockSwtAuth } from './auth/mock-swt-auth';

const startApp = async () => {
  const app: express.Express = express();

  app.use(express.json({ limit: '50mb' }))
  app.use(cors({ origin: config.allowedOrigins }))

  const auth: AbstractSwtAuth = config.isProduction 
    ? new SwtRedisAuth(config.redisUrl, {
      ttl: config.nonceTtl,
      skipOnMissingSignature: true,
      allowedOrigins: config.allowedOrigins
    })
    : new MockSwtAuth()

  app.use(auth.middleware())
  // allow to get nonce for signature verification
  app.get('/nonce', auth.nonceHandler()) 

  await startGraphql(app, '/graphql')

  const { url } = await startExpress(app, config.port)
  console.log(`
    🚀 Server ready at: ${url}
    ⭐️  See sample queries: http://pris.ly/e/ts/graphql-typegraphql#using-the-graphql-api`
  )
}

void startApp()
