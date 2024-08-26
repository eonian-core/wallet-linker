import { PrismaClient, Wallet } from "@prisma/client";
import { Roles } from "../auth/wallet-auth-checker";

export class WalletAdapter {
  constructor(private prisma: PrismaClient) {}

  async findOrCreateWallet(address: string, chainId: number, createdBy: Roles = Roles.USER): Promise<Wallet> {
    address = address.toLowerCase();
    
    return await this.prisma.wallet.upsert({
      where: { 
        address_chainId: { address, chainId }, 
        deletedAt: {
            isSet: false,
        },
      },
      update: {},
      create: { address, chainId, createdBy },
    });
  }
}