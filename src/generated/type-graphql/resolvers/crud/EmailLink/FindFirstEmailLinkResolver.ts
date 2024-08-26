import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstEmailLinkArgs } from "./args/FindFirstEmailLinkArgs";
import { EmailLink } from "../../../models/EmailLink";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EmailLink)
export class FindFirstEmailLinkResolver {
  @TypeGraphQL.Query(_returns => EmailLink, {
    nullable: true
  })
  async findFirstEmailLink(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEmailLinkArgs): Promise<EmailLink | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).emailLink.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
