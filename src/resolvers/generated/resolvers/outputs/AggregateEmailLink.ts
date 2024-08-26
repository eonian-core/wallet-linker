import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmailLinkCountAggregate } from "../outputs/EmailLinkCountAggregate";
import { EmailLinkMaxAggregate } from "../outputs/EmailLinkMaxAggregate";
import { EmailLinkMinAggregate } from "../outputs/EmailLinkMinAggregate";

@TypeGraphQL.ObjectType("AggregateEmailLink", {})
export class AggregateEmailLink {
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
