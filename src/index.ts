import 'reflect-metadata'
import 'dotenv/config'

import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import * as tq from 'type-graphql'
import { Context, context } from './context'
import { resolvers } from '@generated/type-graphql'
import FlyPlugin from './providers/fly'

const app = async () => {
  const schema = await tq.buildSchema({
    resolvers,
  })

  const server = new ApolloServer<Context>({ schema, plugins: [FlyPlugin] })

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