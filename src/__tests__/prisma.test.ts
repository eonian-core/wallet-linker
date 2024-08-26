import {describe, expect, test, beforeAll, afterAll} from '@jest/globals';
import { PrismaClient } from '@prisma/client'
import { Roles } from '../auth/wallet-auth-checker';

export const prisma = new PrismaClient()

describe('setup test database', () => {
  beforeAll(async () => {
    await prisma.wallet.deleteMany({})
    await prisma.emailLink.deleteMany({})
    await prisma.socialLink.deleteMany({})
  })
  afterAll(async () => {
    await prisma.$disconnect()
  })

  test('test query', async () => {
    const data = await prisma.wallet.findMany({ take: 1, select: { id: true } })
    expect(data).toBeTruthy()
  })

  const address = '0x2603B2E72A41b059344F5a7FbA52a0a1298E175e'
  const chainId = 56
  const email = 'test@email.com'
  const platform = 'twitter'
  const username = 'testuser'
  let walletId: string
  let emailLinkId: string
  let socialLinkId: string

  test('create wallet', async () => {
    const wallet = await prisma.wallet.create({
      data: {
        address,
        chainId,
        createdBy: Roles.USER,
      },
    })

    expect(wallet).toBeTruthy()
    expect(typeof wallet.id).toEqual('string')
    expect(wallet.address).toEqual(address)
    expect(wallet.chainId).toEqual(chainId)
    expect(wallet.createdBy).toEqual(Roles.USER)
  })

  test('create a wallet with email and social links', async () => {
    const wallet = await prisma.wallet.create({
      data: {
        address,
        chainId,
        createdBy: Roles.USER,
        emailLinks: {
          create: [{
                email,
                createdBy: Roles.USER,
            },{
                email: 'another@test.com',
                createdBy: Roles.USER,
            },
          ],
        },
        socialLinks: {
          create: [{
            platform,
            username,
            createdBy: Roles.USER,
          }],
        },
      },
      include: {
        emailLinks: true,
        socialLinks: true,
      },
    })

    expect(wallet.id).toBeTruthy()
    expect(wallet.createdAt instanceof Date).toBeTruthy()
    expect(wallet.address).toEqual(address)
    expect(wallet.chainId).toEqual(chainId)
    expect(wallet.createdBy).toEqual(Roles.USER)

    expect(wallet.emailLinks.length).toEqual(2)
    expect(wallet.emailLinks[0].walletId).toEqual(wallet.id)
    expect(wallet.emailLinks[0].email).toEqual(email)
    expect(wallet.emailLinks[0].id).toBeTruthy()

    expect(wallet.socialLinks.length).toEqual(1)
    expect(wallet.socialLinks[0].walletId).toEqual(wallet.id)
    expect(wallet.socialLinks[0].platform).toEqual(platform)
    expect(wallet.socialLinks[0].username).toEqual(username)
    expect(wallet.socialLinks[0].id).toBeTruthy()

    walletId = wallet.id
    emailLinkId = wallet.emailLinks[0].id
    socialLinkId = wallet.socialLinks[0].id
  })

  test('Find wallet based on wallet id', async () => {
    const wallet = await prisma.wallet.findUnique({
      where: {
        id: walletId,
      },
    })

    expect(wallet).toBeTruthy()
    expect(wallet?.address).toEqual(address)
  })

  test('Find wallet and related email links based on wallet id', async () => {
    const walletEmailLinks = await prisma.wallet
      .findUnique({
        where: {
          id: walletId,
        },
      })
      .emailLinks()

    expect(walletEmailLinks).toBeTruthy()
    expect(walletEmailLinks?.length).toEqual(2)
  })

  test('Find email links based on wallet id', async () => {
    const emailLinksFromWallet = await prisma.emailLink.findMany({
      where: {
        walletId: walletId,
      },
    })
    expect(emailLinksFromWallet).toBeTruthy()
    expect(emailLinksFromWallet.length).toEqual(2)
  })

  test('Filter email links based on email', async () => {
    const emailLinks = await prisma.emailLink.findMany({
      where: {
        email: {
          equals: email,
        },
      },
    })
    expect(emailLinks).toBeTruthy()
    expect(emailLinks.length).toEqual(1)
  })

  test('Update email links - createdBy to Admin', async () => {
    const emailLinksByWallet = await prisma.emailLink.updateMany({
      where: {
        walletId: walletId,
      },
      data: {
        createdBy: Roles.ADMIN,
      },
    })
    expect(emailLinksByWallet.count).toBeTruthy()
    expect(emailLinksByWallet.count).toEqual(2)

    const emailLinks = await prisma.emailLink.findMany({
      where: {
        walletId: walletId,
      },
      select: {
        createdBy: true,
      },
    })

    expect(emailLinks).toBeTruthy()
    expect(emailLinks.length).toEqual(2)
    expect(emailLinks[0].createdBy).toEqual(Roles.ADMIN)
    expect(emailLinks[1].createdBy).toEqual(Roles.ADMIN)
  })

  test('Delete email link', async () => {
    const deletedEmailLink = await prisma.emailLink.delete({
      where: {
        id: emailLinkId,
      },
    })
    expect(deletedEmailLink).toBeTruthy()

    const emailLinkByWalletCount = await prisma.emailLink.count({
      where: {
        walletId: walletId,
      },
    })

    expect(emailLinkByWalletCount).toBeTruthy()
    expect(emailLinkByWalletCount).toEqual(1)
  })
})