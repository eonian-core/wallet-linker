import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmailLinkCountAggregate } from "../outputs/EmailLinkCountAggregate";
import { EmailLinkMaxAggregate } from "../outputs/EmailLinkMaxAggregate";
import { EmailLinkMinAggregate } from "../outputs/EmailLinkMinAggregate";

@TypeGraphQL.ObjectType("EmailLinkGroupBy", {})
export class EmailLinkGroupBy {
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
  email!: string;

  @TypeGraphQL.Field(_type => EmailLinkCountAggregate, {
    nullable: true
  })
  _count!: EmailLinkCountAggregate | null;

  @TypeGraphQL.Field(_type => EmailLinkMinAggregate, {
    nullable: true
  })
  _min!: EmailLinkMinAggregate | null;

  @TypeGraphQL.Field(_type => EmailLinkMaxAggregate, {
    nullable: true
  })
  _max!: EmailLinkMaxAggregate | null;
}
