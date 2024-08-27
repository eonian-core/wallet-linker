import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSocialLinkArgs } from "./args/AggregateSocialLinkArgs";
import { SocialLink } from "../../../models/SocialLink";
import { AggregateSocialLink } from "../../outputs/AggregateSocialLink";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SocialLink)
export class AggregateSocialLinkResolver {
  @TypeGraphQL.Query(_returns => AggregateSocialLink, {
    nullable: false
  })
  async aggregateSocialLink(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSocialLinkArgs): Promise<AggregateSocialLink> {
    return getPrismaFromContext(ctx).socialLink.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
