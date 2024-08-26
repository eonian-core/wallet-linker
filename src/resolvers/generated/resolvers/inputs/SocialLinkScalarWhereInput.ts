import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("SocialLinkScalarWhereInput", {})
export class SocialLinkScalarWhereInput {
  @TypeGraphQL.Field(_type => [SocialLinkScalarWhereInput], {
    nullable: true
  })
  AND?: SocialLinkScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SocialLinkScalarWhereInput], {
    nullable: true
  })
  OR?: SocialLinkScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SocialLinkScalarWhereInput], {
    nullable: true
  })
  NOT?: SocialLinkScalarWhereInput[] | undefined;

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
}
