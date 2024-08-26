import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("WalletScalarWhereWithAggregatesInput", {})
export class WalletScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [WalletScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: WalletScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: WalletScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: WalletScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  createdBy?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  deltedBy?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  address?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  chainId?: IntWithAggregatesFilter | undefined;
}
