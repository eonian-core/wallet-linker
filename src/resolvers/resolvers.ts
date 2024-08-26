import { Authorized } from "type-graphql";
import {
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
import { FindUniqueWalletResolver, WalletRelationsResolver } from "../wallet/resolvers";

type NonEmptyArray<T> = readonly [T, ...T[]] | [T, ...T[]];

export const resolvers: NonEmptyArray<Function> = [
    // overriden the generated resolvers, to decrease interface
    WalletRelationsResolver,
    FindUniqueWalletResolver, 
    // FindManyWalletResolver,
    // CreateOneWalletResolver,
    // UpdateOneWalletResolver,

    // EmailLinkRelationsResolver,
    // FindUniqueEmailLinkResolver,
    // FindManyEmailLinkResolver,
    // CreateOneEmailLinkResolver,
    // UpdateOneEmailLinkResolver,
    
    // SocialLinkRelationsResolver,
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