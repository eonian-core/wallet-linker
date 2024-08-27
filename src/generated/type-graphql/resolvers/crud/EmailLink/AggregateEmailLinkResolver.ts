import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEmailLinkArgs } from "./args/AggregateEmailLinkArgs";
import { EmailLink } from "../../../models/EmailLink";
import { AggregateEmailLink } from "../../outputs/AggregateEmailLink";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EmailLink)
export class AggregateEmailLinkResolver {
  @TypeGraphQL.Query(_returns => AggregateEmailLink, {
    nullable: false
  })
  async aggregateEmailLink(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEmailLinkArgs): Promise<AggregateEmailLink> {
    return getPrismaFromContext(ctx).emailLink.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
