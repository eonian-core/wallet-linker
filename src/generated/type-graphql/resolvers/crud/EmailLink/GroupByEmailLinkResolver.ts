import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByEmailLinkArgs } from "./args/GroupByEmailLinkArgs";
import { EmailLink } from "../../../models/EmailLink";
import { EmailLinkGroupBy } from "../../outputs/EmailLinkGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EmailLink)
export class GroupByEmailLinkResolver {
  @TypeGraphQL.Query(_returns => [EmailLinkGroupBy], {
    nullable: false
  })
  async groupByEmailLink(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByEmailLinkArgs): Promise<EmailLinkGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).emailLink.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
