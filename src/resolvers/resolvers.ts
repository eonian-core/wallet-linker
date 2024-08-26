import { Authorized } from "type-graphql";
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
    ResolversEnhanceMap,
    applyResolversEnhanceMap,
} from './generated'
import { Roles } from "../auth/wallet-auth-checker";

type NonEmptyArray<T> = readonly [T, ...T[]] | [T, ...T[]];

export const resolvers: NonEmptyArray<Function> = [
    WalletRelationsResolver,
    FindUniqueWalletResolver,
    // FindManyWalletResolver,
    // CreateOneWalletResolver,
    // UpdateOneWalletResolver,

    EmailLinkRelationsResolver,
    // FindUniqueEmailLinkResolver,
    // FindManyEmailLinkResolver,
    // CreateOneEmailLinkResolver,
    // UpdateOneEmailLinkResolver,
    
    SocialLinkRelationsResolver,
    // FindUniqueSocialLinkResolver,
    // FindManySocialLinkResolver,
    // CreateOneSocialLinkResolver,
    // UpdateOneSocialLinkResolver,
]


const resolversEnhanceMap: ResolversEnhanceMap = {
    Wallet: {
        _all: [Authorized(Roles.USER)],
    },
  };
  
export const setupDecorators = () => applyResolversEnhanceMap(resolversEnhanceMap);