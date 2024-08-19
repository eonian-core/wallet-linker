import {
    WalletCrudResolver,
    WalletRelationsResolver,
    EmailLinkCrudResolver,
    EmailLinkRelationsResolver,
    SocialLinkCrudResolver,
    SocialLinkRelationsResolver,
} from '@generated/type-graphql'

type NonEmptyArray<T> = readonly [T, ...T[]] | [T, ...T[]];

export const resolvers: NonEmptyArray<Function> = [
    WalletCrudResolver,
    WalletRelationsResolver,
    EmailLinkCrudResolver,
    EmailLinkRelationsResolver,
    SocialLinkCrudResolver,
    SocialLinkRelationsResolver,
]