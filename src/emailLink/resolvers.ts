import * as TypeGraphQL from "type-graphql";
import { Authorized } from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { EmailLink } from "../generated/type-graphql";
import { Context } from "../context";
import { Roles } from "../auth/wallet-auth-checker";

@TypeGraphQL.ArgsType()
export class LinkEmailToWalletArgs {
    @TypeGraphQL.Field(_type => String, {
        nullable: false
    })
    email!: string;
}


@Authorized(Roles.USER)
@TypeGraphQL.Resolver(_of => EmailLink)
export class LinkWalletToEmailResolver {
    @TypeGraphQL.Mutation(_returns => EmailLink, {
        nullable: false
    })
    async linkEmailToWallet(@TypeGraphQL.Ctx() ctx: Context, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: LinkEmailToWalletArgs): Promise<EmailLink> {
        const { wallet } = ctx
        if (!wallet) {
            throw new Error('No wallet found in context');
        }

        const {email} = args;
        return ctx.prisma.emailLink.create({
            data: {
                email,
                createdBy: Roles.USER,
                walletId: wallet.id
            }
        });
    }
}
