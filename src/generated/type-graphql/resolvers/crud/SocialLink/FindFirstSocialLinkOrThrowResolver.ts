import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSocialLinkOrThrowArgs } from "./args/FindFirstSocialLinkOrThrowArgs";
import { SocialLink } from "../../../models/SocialLink";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SocialLink)
export class FindFirstSocialLinkOrThrowResolver {
  @TypeGraphQL.Query(_returns => SocialLink, {
    nullable: true
  })
  async findFirstSocialLinkOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSocialLinkOrThrowArgs): Promise<SocialLink | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).socialLink.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
