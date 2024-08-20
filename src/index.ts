import 'reflect-metadata'
import 'dotenv/config'

import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import * as tq from 'type-graphql'
import { Context, context } from './context'
import { resolvers } from './resolvers'
import FlyPlugin from './providers/fly'

const app = async () => {
  const schemaPath = process.env.SHEMA_PATH || './schema.graphql'
  const schema = await tq.buildSchema({
    resolvers,
    emitSchemaFile: schemaPath,
  })

  console.log(`🚀 Saved schema to ${schemaPath}`)

  const server = new ApolloServer<Context>({ schema, introspection: true, plugins: [
    FlyPlugin,
    ApolloServerPluginLandingPageLocalDefault() // enable playground in all environments
  ]})

  const { url } = await startStandaloneServer(server, { 
    listen: { 
        port: +(process.env.PORT || "4000")
    },
    context: async () => context 
  })

  console.log(`
    🚀 Server ready at: ${url}
    ⭐️  See sample queries: http://pris.ly/e/ts/graphql-typegraphql#using-the-graphql-api`
  )
}

app()