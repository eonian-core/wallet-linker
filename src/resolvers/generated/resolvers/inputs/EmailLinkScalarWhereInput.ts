import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("EmailLinkScalarWhereInput", {})
export class EmailLinkScalarWhereInput {
  @TypeGraphQL.Field(_type => [EmailLinkScalarWhereInput], {
    nullable: true
  })
  AND?: EmailLinkScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmailLinkScalarWhereInput], {
    nullable: true
  })
  OR?: EmailLinkScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmailLinkScalarWhereInput], {
    nullable: true
  })
  NOT?: EmailLinkScalarWhereInput[] | undefined;

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
}
