import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("EmailLinkScalarWhereWithAggregatesInput", {})
export class EmailLinkScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [EmailLinkScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: EmailLinkScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmailLinkScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: EmailLinkScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmailLinkScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: EmailLinkScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  createdBy?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  deltedBy?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  walletId?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  email?: StringWithAggregatesFilter | undefined;
}
