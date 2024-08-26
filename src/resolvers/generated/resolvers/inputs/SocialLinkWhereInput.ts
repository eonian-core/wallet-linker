import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { WalletNullableRelationFilter } from "../inputs/WalletNullableRelationFilter";

@TypeGraphQL.InputType("SocialLinkWhereInput", {})
export class SocialLinkWhereInput {
  @TypeGraphQL.Field(_type => [SocialLinkWhereInput], {
    nullable: true
  })
  AND?: SocialLinkWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SocialLinkWhereInput], {
    nullable: true
  })
  OR?: SocialLinkWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SocialLinkWhereInput], {
    nullable: true
  })
  NOT?: SocialLinkWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  createdBy?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  deltedBy?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  walletId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  platform?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  username?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => WalletNullableRelationFilter, {
    nullable: true
  })
  wallet?: WalletNullableRelationFilter | undefined;
}
