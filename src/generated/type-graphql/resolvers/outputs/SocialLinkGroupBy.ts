import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SocialLinkCountAggregate } from "../outputs/SocialLinkCountAggregate";
import { SocialLinkMaxAggregate } from "../outputs/SocialLinkMaxAggregate";
import { SocialLinkMinAggregate } from "../outputs/SocialLinkMinAggregate";

@TypeGraphQL.ObjectType("SocialLinkGroupBy", {})
export class SocialLinkGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  createdBy!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  deletedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  deltedBy!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  walletId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  platform!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

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
