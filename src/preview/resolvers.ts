import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { EmailLinkPreview, WalletPreview } from "./preview.models";
import { Context } from "../context";
import { maskEmailForPreview } from "./mask-email";

@TypeGraphQL.ArgsType()
export class FindUniqueWalletPreviewArgs {
    @TypeGraphQL.Field(_type => String, {
        nullable: false
    })
    address!: string;

    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    })
    chainId!: number;
}


/** Preview of walet which not require authnentication */
@TypeGraphQL.Resolver(_of => WalletPreview)
export class FindUniqueWalletPreviewResolver {
    @TypeGraphQL.Query(_returns => WalletPreview, {
        nullable: true
    })
    async walletPreview(@TypeGraphQL.Ctx() ctx: Context, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueWalletPreviewArgs): Promise<WalletPreview | null> {
        const { address, chainId } = args;

        const wallet = await ctx.prisma.wallet.findUnique({ where: { 
            address_chainId: { address, chainId },
            deletedAt: {
                isSet: false,
            },
        } });
        if (!wallet) {
            return null;
        }

        return {
            id: wallet.id,
            address: wallet.address,
            chainId: wallet.chainId,
        }
    }
}

@TypeGraphQL.Resolver(_of => WalletPreview)
export class WalletPreviewRelationsResolver {
    @TypeGraphQL.FieldResolver(_type => EmailLinkPreview, {
        nullable: true
    })
    async emailLink(@TypeGraphQL.Root() wallet: WalletPreview, @TypeGraphQL.Ctx() ctx: Context, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<EmailLinkPreview | null> {
        const emailLinks = await ctx.prisma.emailLink.findMany({ where: { 
            walletId: wallet.id, 
            deletedAt: {
                isSet: false,
            },
        } });
        const emailLink = emailLinks[0];
        if (!emailLink) {
            return null;
        }

        return {
            id: emailLink.id,
            walletId: emailLink.walletId,
            email: maskEmailForPreview(emailLink.email)
        }
    }
}