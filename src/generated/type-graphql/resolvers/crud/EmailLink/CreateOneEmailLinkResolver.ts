import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneEmailLinkArgs } from "./args/CreateOneEmailLinkArgs";
import { EmailLink } from "../../../models/EmailLink";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EmailLink)
export class CreateOneEmailLinkResolver {
  @TypeGraphQL.Mutation(_returns => EmailLink, {
    nullable: false
  })
  async createOneEmailLink(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneEmailLinkArgs): Promise<EmailLink> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).emailLink.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
