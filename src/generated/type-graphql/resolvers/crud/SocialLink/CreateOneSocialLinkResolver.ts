import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneSocialLinkArgs } from "./args/CreateOneSocialLinkArgs";
import { SocialLink } from "../../../models/SocialLink";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SocialLink)
export class CreateOneSocialLinkResolver {
  @TypeGraphQL.Mutation(_returns => SocialLink, {
    nullable: false
  })
  async createOneSocialLink(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneSocialLinkArgs): Promise<SocialLink> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).socialLink.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
