import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSocialLinkArgs } from "./args/AggregateSocialLinkArgs";
import { CreateManySocialLinkArgs } from "./args/CreateManySocialLinkArgs";
import { CreateOneSocialLinkArgs } from "./args/CreateOneSocialLinkArgs";
import { DeleteManySocialLinkArgs } from "./args/DeleteManySocialLinkArgs";
import { DeleteOneSocialLinkArgs } from "./args/DeleteOneSocialLinkArgs";
import { FindFirstSocialLinkArgs } from "./args/FindFirstSocialLinkArgs";
import { FindFirstSocialLinkOrThrowArgs } from "./args/FindFirstSocialLinkOrThrowArgs";
import { FindManySocialLinkArgs } from "./args/FindManySocialLinkArgs";
import { FindUniqueSocialLinkArgs } from "./args/FindUniqueSocialLinkArgs";
import { FindUniqueSocialLinkOrThrowArgs } from "./args/FindUniqueSocialLinkOrThrowArgs";
import { GroupBySocialLinkArgs } from "./args/GroupBySocialLinkArgs";
import { UpdateManySocialLinkArgs } from "./args/UpdateManySocialLinkArgs";
import { UpdateOneSocialLinkArgs } from "./args/UpdateOneSocialLinkArgs";
import { UpsertOneSocialLinkArgs } from "./args/UpsertOneSocialLinkArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { SocialLink } from "../../../models/SocialLink";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateSocialLink } from "../../outputs/AggregateSocialLink";
import { SocialLinkGroupBy } from "../../outputs/SocialLinkGroupBy";

@TypeGraphQL.Resolver(_of => SocialLink)
export class SocialLinkCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateSocialLink, {
    nullable: false
  })
  async aggregateSocialLink(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSocialLinkArgs): Promise<AggregateSocialLink> {
    return getPrismaFromContext(ctx).socialLink.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManySocialLink(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManySocialLinkArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).socialLink.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManySocialLink(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManySocialLinkArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).socialLink.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SocialLink, {
    nullable: true
  })
  async deleteOneSocialLink(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneSocialLinkArgs): Promise<SocialLink | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).socialLink.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SocialLink, {
    nullable: true
  })
  async findFirstSocialLink(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSocialLinkArgs): Promise<SocialLink | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).socialLink.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SocialLink, {
    nullable: true
  })
  async findFirstSocialLinkOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSocialLinkOrThrowArgs): Promise<SocialLink | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).socialLink.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [SocialLink], {
    nullable: false
  })
  async socialLinks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManySocialLinkArgs): Promise<SocialLink[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).socialLink.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManySocialLink(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManySocialLinkArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).socialLink.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SocialLink, {
    nullable: true
  })
  async updateOneSocialLink(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneSocialLinkArgs): Promise<SocialLink | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).socialLink.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SocialLink, {
    nullable: false
  })
  async upsertOneSocialLink(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneSocialLinkArgs): Promise<SocialLink> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).socialLink.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
