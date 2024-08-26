import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SocialLinkCountAggregate } from "../outputs/SocialLinkCountAggregate";
import { SocialLinkMaxAggregate } from "../outputs/SocialLinkMaxAggregate";
import { SocialLinkMinAggregate } from "../outputs/SocialLinkMinAggregate";

@TypeGraphQL.ObjectType("AggregateSocialLink", {})
export class AggregateSocialLink {
  @TypeGraphQL.Field(_type => SocialLinkCountAggregate, {
    nullable: true
  })
  _count!: SocialLinkCountAggregate | null;

  @TypeGraphQL.Field(_type => SocialLinkMinAggregate, {
    nullable: true
  })
  _min!: SocialLinkMinAggregate | null;

  @TypeGraphQL.Field(_type => SocialLinkMaxAggregate, {
    nullable: true
  })
  _max!: SocialLinkMaxAggregate | null;
}
