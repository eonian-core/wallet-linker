import { PrismaClient } from '@prisma/client'
import { prisma } from './providers/prisma'
import { ContextFunction } from '@apollo/server'
import { ExpressContextFunctionArgument } from '@apollo/server/dist/esm/express4'

export interface Context {
  prisma: PrismaClient
}

export const provideContext: ContextFunction<[ExpressContextFunctionArgument], Context> =  async () => ({
  prisma: prisma,
})