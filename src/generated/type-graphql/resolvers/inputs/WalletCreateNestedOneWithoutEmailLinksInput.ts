import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletCreateOrConnectWithoutEmailLinksInput } from "../inputs/WalletCreateOrConnectWithoutEmailLinksInput";
import { WalletCreateWithoutEmailLinksInput } from "../inputs/WalletCreateWithoutEmailLinksInput";
import { WalletWhereUniqueInput } from "../inputs/WalletWhereUniqueInput";

@TypeGraphQL.InputType("WalletCreateNestedOneWithoutEmailLinksInput", {})
export class WalletCreateNestedOneWithoutEmailLinksInput {
  @TypeGraphQL.Field(_type => WalletCreateWithoutEmailLinksInput, {
    nullable: true
  })
  create?: WalletCreateWithoutEmailLinksInput | undefined;

  @TypeGraphQL.Field(_type => WalletCreateOrConnectWithoutEmailLinksInput, {
    nullable: true
  })
  connectOrCreate?: WalletCreateOrConnectWithoutEmailLinksInput | undefined;

  @TypeGraphQL.Field(_type => WalletWhereUniqueInput, {
    nullable: true
  })
  connect?: WalletWhereUniqueInput | undefined;
}
