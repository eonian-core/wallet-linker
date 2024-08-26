import { PrismaClient, Wallet} from '@prisma/client'
import { prisma } from './providers/prisma'
import { ContextFunction } from '@apollo/server'
import { ExpressContextFunctionArgument } from '@apollo/server/dist/esm/express4'
import { UserWallet } from './auth/extend-request'
import { WalletAdapter } from './wallet/wallet-adapter'

export interface Context {
  prisma: PrismaClient
  wallet?: ContextWallet
}

export interface ContextWallet extends UserWallet, Wallet {
}

const walletAdapter = new WalletAdapter(prisma)

export const provideContext: ContextFunction<[ExpressContextFunctionArgument], Context> =  async ({req}) => {
  const userWallet = req.wallet
  if (!userWallet) {
    return { prisma }
  }

  const wallet = await walletAdapter.findOrCreateWallet(userWallet.address, userWallet.chainId)

  return {
    prisma,
    wallet: {
      ...userWallet,
      ...wallet,
    }
  }
}