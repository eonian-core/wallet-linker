import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { EmailLinkPreview, WalletPreview } from "./preview.models";
import { Context } from "../context";
import { maskEmailForPreview } from "./mask-email";
import { isNotSoftDeleted } from "../soft-delete";
import { Wallet } from "../generated/type-graphql";

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
        let { address, chainId } = args;
        // client and network can accidentially lowercase address
        // so store it in lowercase to prevent case mismatch
        address = address.toLowerCase(); 
        console.log(`FindUniqueWalletPreviewResolver: address=${address}, chainId=${chainId}`);
        const wallet = await ctx.prisma.wallet.findUnique({ where: { 
            address_chainId: { address, chainId },
            ...isNotSoftDeleted
        } });
        if (!wallet) {
            console.log(`FindUniqueWalletPreviewResolver: wallet not found`);
            return null;
        }

        return {
            id: wallet.id,
            address: wallet.address,
            chainId: wallet.chainId,
        }
    }
}

@TypeGraphQL.Resolver(_of => Wallet)
export class WalletRelationsToPreviewResolver {
    @TypeGraphQL.FieldResolver(_type => WalletPreview, {
        nullable: false
    })
    async preview(@TypeGraphQL.Root() wallet: Wallet, @TypeGraphQL.Ctx() ctx: Context, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<WalletPreview> {
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
            ...isNotSoftDeleted
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


