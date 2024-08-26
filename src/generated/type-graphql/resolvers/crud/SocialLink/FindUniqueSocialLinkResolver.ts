import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueSocialLinkArgs } from "./args/FindUniqueSocialLinkArgs";
import { SocialLink } from "../../../models/SocialLink";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SocialLink)
export class FindUniqueSocialLinkResolver {
  @TypeGraphQL.Query(_returns => SocialLink, {
    nullable: true
  })
  async socialLink(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSocialLinkArgs): Promise<SocialLink | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).socialLink.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
