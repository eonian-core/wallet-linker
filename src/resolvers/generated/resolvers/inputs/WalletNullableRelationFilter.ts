import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletWhereInput } from "../inputs/WalletWhereInput";

@TypeGraphQL.InputType("WalletNullableRelationFilter", {})
export class WalletNullableRelationFilter {
  @TypeGraphQL.Field(_type => WalletWhereInput, {
    nullable: true
  })
  is?: WalletWhereInput | undefined;

  @TypeGraphQL.Field(_type => WalletWhereInput, {
    nullable: true
  })
  isNot?: WalletWhereInput | undefined;
}
