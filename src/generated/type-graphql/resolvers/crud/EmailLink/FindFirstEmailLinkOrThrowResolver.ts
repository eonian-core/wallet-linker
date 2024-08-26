import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstEmailLinkOrThrowArgs } from "./args/FindFirstEmailLinkOrThrowArgs";
import { EmailLink } from "../../../models/EmailLink";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EmailLink)
export class FindFirstEmailLinkOrThrowResolver {
  @TypeGraphQL.Query(_returns => EmailLink, {
    nullable: true
  })
  async findFirstEmailLinkOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEmailLinkOrThrowArgs): Promise<EmailLink | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).emailLink.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
