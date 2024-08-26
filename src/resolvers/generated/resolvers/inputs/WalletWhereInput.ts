import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EmailLinkListRelationFilter } from "../inputs/EmailLinkListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { SocialLinkListRelationFilter } from "../inputs/SocialLinkListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("WalletWhereInput", {})
export class WalletWhereInput {
  @TypeGraphQL.Field(_type => [WalletWhereInput], {
    nullable: true
  })
  AND?: WalletWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletWhereInput], {
    nullable: true
  })
  OR?: WalletWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WalletWhereInput], {
    nullable: true
  })
  NOT?: WalletWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  createdBy?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  deltedBy?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  address?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  chainId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => EmailLinkListRelationFilter, {
    nullable: true
  })
  emailLinks?: EmailLinkListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SocialLinkListRelationFilter, {
    nullable: true
  })
  socialLinks?: SocialLinkListRelationFilter | undefined;
}
