import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import * as tq from 'type-graphql'
import { Context, provideContext } from './context'
import { resolvers } from './resolvers/resolvers'
import FlyPlugin from './providers/fly'
import express from 'express';
import { WalletAuthChecker } from './auth/wallet-auth-checker';

export async function startGraphql(app: express.Express, path: string) {
  const schemaPath = process.env.SHEMA_PATH || './schema.graphql'
  const schema = await tq.buildSchema({
    resolvers,
    emitSchemaFile: schemaPath,
    authChecker: WalletAuthChecker,
  })

  console.log(`🚀 Saved schema to ${schemaPath}`)

  const server = new ApolloServer<Context>({
    schema, 
    introspection: true, 
    plugins: [
      FlyPlugin,
      ApolloServerPluginLandingPageLocalDefault() // enable playground in all environments
    ]
  })
  // instance before passing the instance to `expressMiddleware`
  await server.start();

  app.use(path, expressMiddleware(server, { context: provideContext }));
}
