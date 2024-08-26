import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { EmailLink } from "../../../models/EmailLink";
import { Wallet } from "../../../models/Wallet";
import { EmailLinkWalletArgs } from "./args/EmailLinkWalletArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EmailLink)
export class EmailLinkRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Wallet, {
    nullable: true
  })
  async wallet(@TypeGraphQL.Root() emailLink: EmailLink, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: EmailLinkWalletArgs): Promise<Wallet | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).emailLink.findUniqueOrThrow({
      where: {
        id: emailLink.id,
      },
    }).wallet({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
