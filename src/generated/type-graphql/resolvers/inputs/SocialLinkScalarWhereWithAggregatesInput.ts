import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("SocialLinkScalarWhereWithAggregatesInput", {})
export class SocialLinkScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SocialLinkScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SocialLinkScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SocialLinkScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SocialLinkScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SocialLinkScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SocialLinkScalarWhereWithAggregatesInput[] | undefined;

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
  platform?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  username?: StringWithAggregatesFilter | undefined;
}
