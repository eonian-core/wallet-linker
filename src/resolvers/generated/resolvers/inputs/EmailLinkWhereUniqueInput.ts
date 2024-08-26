import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EmailLinkWhereInput } from "../inputs/EmailLinkWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { WalletNullableRelationFilter } from "../inputs/WalletNullableRelationFilter";

@TypeGraphQL.InputType("EmailLinkWhereUniqueInput", {})
export class EmailLinkWhereUniqueInput {
  @TypeGraphQL.Field(_type => [EmailLinkWhereInput], {
    nullable: true
  })
  AND?: EmailLinkWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmailLinkWhereInput], {
    nullable: true
  })
  OR?: EmailLinkWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmailLinkWhereInput], {
    nullable: true
  })
  NOT?: EmailLinkWhereInput[] | undefined;

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
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => WalletNullableRelationFilter, {
    nullable: true
  })
  wallet?: WalletNullableRelationFilter | undefined;
}
