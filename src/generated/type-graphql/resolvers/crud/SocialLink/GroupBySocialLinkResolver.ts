import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupBySocialLinkArgs } from "./args/GroupBySocialLinkArgs";
import { SocialLink } from "../../../models/SocialLink";
import { SocialLinkGroupBy } from "../../outputs/SocialLinkGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SocialLink)
export class GroupBySocialLinkResolver {
  @TypeGraphQL.Query(_returns => [SocialLinkGroupBy], {
    nullable: false
  })
  async groupBySocialLink(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySocialLinkArgs): Promise<SocialLinkGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).socialLink.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
