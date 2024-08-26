import { FindUniqueWalletResolver, WalletRelationsResolver } from "./wallet/resolvers";
import { FindUniqueWalletPreviewResolver, WalletPreviewRelationsResolver, WalletRelationsToPreviewResolver } from "./preview/resolvers";
import { LinkWalletToEmailResolver } from "./emailLink/resolvers";

type NonEmptyArray<T> = readonly [T, ...T[]] | [T, ...T[]];

export const resolvers: NonEmptyArray<Function> = [
    // overriden the generated resolvers, to decrease interface
    WalletRelationsResolver,
    FindUniqueWalletResolver,
    FindUniqueWalletPreviewResolver,
    WalletPreviewRelationsResolver,
    WalletRelationsToPreviewResolver,
    LinkWalletToEmailResolver,
]
