import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletCreateWithoutEmailLinksInput } from "../inputs/WalletCreateWithoutEmailLinksInput";
import { WalletUpdateWithoutEmailLinksInput } from "../inputs/WalletUpdateWithoutEmailLinksInput";
import { WalletWhereInput } from "../inputs/WalletWhereInput";

@TypeGraphQL.InputType("WalletUpsertWithoutEmailLinksInput", {})
export class WalletUpsertWithoutEmailLinksInput {
  @TypeGraphQL.Field(_type => WalletUpdateWithoutEmailLinksInput, {
    nullable: false
  })
  update!: WalletUpdateWithoutEmailLinksInput;

  @TypeGraphQL.Field(_type => WalletCreateWithoutEmailLinksInput, {
    nullable: false
  })
  create!: WalletCreateWithoutEmailLinksInput;

  @TypeGraphQL.Field(_type => WalletWhereInput, {
    nullable: true
  })
  where?: WalletWhereInput | undefined;
}
