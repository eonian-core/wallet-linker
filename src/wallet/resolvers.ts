import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { EmailLink, SocialLink, Wallet } from "../resolvers/generated";
import { getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, transformInfoIntoPrismaArgs } from "../resolvers/generated/helpers";
import { Context } from "../context";

/** Based on generated resolver */
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
            where: { address_chainId: { address, chainId } },
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
}

/** Based on generated resolver */
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
            },
        }).socialLinks({
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
}
