import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletCreateWithoutEmailLinksInput } from "../inputs/WalletCreateWithoutEmailLinksInput";
import { WalletWhereUniqueInput } from "../inputs/WalletWhereUniqueInput";

@TypeGraphQL.InputType("WalletCreateOrConnectWithoutEmailLinksInput", {})
export class WalletCreateOrConnectWithoutEmailLinksInput {
  @TypeGraphQL.Field(_type => WalletWhereUniqueInput, {
    nullable: false
  })
  where!: WalletWhereUniqueInput;

  @TypeGraphQL.Field(_type => WalletCreateWithoutEmailLinksInput, {
    nullable: false
  })
  create!: WalletCreateWithoutEmailLinksInput;
}
