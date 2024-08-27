import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { SocialLink } from "../../../models/SocialLink";
import { Wallet } from "../../../models/Wallet";
import { SocialLinkWalletArgs } from "./args/SocialLinkWalletArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SocialLink)
export class SocialLinkRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Wallet, {
    nullable: true
  })
  async wallet(@TypeGraphQL.Root() socialLink: SocialLink, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: SocialLinkWalletArgs): Promise<Wallet | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).socialLink.findUniqueOrThrow({
      where: {
        id: socialLink.id,
      },
    }).wallet({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
