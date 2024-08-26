import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueSocialLinkOrThrowArgs } from "./args/FindUniqueSocialLinkOrThrowArgs";
import { SocialLink } from "../../../models/SocialLink";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SocialLink)
export class FindUniqueSocialLinkOrThrowResolver {
  @TypeGraphQL.Query(_returns => SocialLink, {
    nullable: true
  })
  async getSocialLink(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSocialLinkOrThrowArgs): Promise<SocialLink | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).socialLink.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
