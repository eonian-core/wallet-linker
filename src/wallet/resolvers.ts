import * as TypeGraphQL from "type-graphql";
import { Authorized } from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { EmailLink, SocialLink, Wallet } from "../generated/type-graphql";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../generated/type-graphql/helpers";
import { Context } from "../context";
import { Roles } from "../auth/wallet-auth-checker";
import { isNotSoftDeleted } from "../soft-delete";

/** Based on generated resolver */
@Authorized(Roles.USER)
@TypeGraphQL.Resolver(_of => Wallet)
export class FindUniqueWalletResolver {
    @TypeGraphQL.Query(_returns => Wallet, {
        nullable: true
    })
    async wallet(@TypeGraphQL.Ctx() ctx: Context, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Wallet | null> {
        const { wallet } = ctx
        if (!wallet) {
            throw new Error('No wallet found in context');
        }

        const { address, chainId } = wallet;
        const { _count } = transformInfoIntoPrismaArgs(info);

        return getPrismaFromContext(ctx).wallet.findUnique({
            where: { 
                address_chainId: { address, chainId }, 
                ...isNotSoftDeleted
            },
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
}

/** Based on generated resolver */
@Authorized(Roles.USER)
@TypeGraphQL.Resolver(_of => Wallet)
export class WalletRelationsResolver {
    @TypeGraphQL.FieldResolver(_type => [EmailLink], {
        nullable: false
    })
    async emailLinks(@TypeGraphQL.Root() wallet: Wallet, @TypeGraphQL.Ctx() ctx: Context, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<EmailLink[]> {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).wallet.findUniqueOrThrow({
            where: {
                id: wallet.id,
                ...isNotSoftDeleted
            },
        }).emailLinks({
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }

    @TypeGraphQL.FieldResolver(_type => [SocialLink], {
        nullable: false
    })
    async socialLinks(@TypeGraphQL.Root() wallet: Wallet, @TypeGraphQL.Ctx() ctx: Context, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<SocialLink[]> {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).wallet.findUniqueOrThrow({
            where: {
                id: wallet.id,
                ...isNotSoftDeleted
            },
        }).socialLinks({
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
}
