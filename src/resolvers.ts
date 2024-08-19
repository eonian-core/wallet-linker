import {
    WalletRelationsResolver,
    FindUniqueWalletResolver,
    FindManyWalletResolver,
    CreateOneWalletResolver,
    UpdateOneWalletResolver,

    FindUniqueEmailLinkResolver,
    FindManyEmailLinkResolver,
    EmailLinkRelationsResolver,
    CreateOneEmailLinkResolver,
    UpdateOneEmailLinkResolver,
    
    FindUniqueSocialLinkResolver,
    FindManySocialLinkResolver,
    SocialLinkRelationsResolver,
    CreateOneSocialLinkResolver,
    UpdateOneSocialLinkResolver,
} from '@generated/type-graphql'

type NonEmptyArray<T> = readonly [T, ...T[]] | [T, ...T[]];

export const resolvers: NonEmptyArray<Function> = [
    WalletRelationsResolver,
    FindUniqueWalletResolver,
    FindManyWalletResolver,
    CreateOneWalletResolver,
    UpdateOneWalletResolver,

    FindUniqueEmailLinkResolver,
    FindManyEmailLinkResolver,
    EmailLinkRelationsResolver,
    CreateOneEmailLinkResolver,
    UpdateOneEmailLinkResolver,
    
    FindUniqueSocialLinkResolver,
    FindManySocialLinkResolver,
    SocialLinkRelationsResolver,
    CreateOneSocialLinkResolver,
    UpdateOneSocialLinkResolver,
]