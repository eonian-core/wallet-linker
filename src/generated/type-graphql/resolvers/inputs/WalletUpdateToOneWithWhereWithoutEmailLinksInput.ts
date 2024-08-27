import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletUpdateWithoutEmailLinksInput } from "../inputs/WalletUpdateWithoutEmailLinksInput";
import { WalletWhereInput } from "../inputs/WalletWhereInput";

@TypeGraphQL.InputType("WalletUpdateToOneWithWhereWithoutEmailLinksInput", {})
export class WalletUpdateToOneWithWhereWithoutEmailLinksInput {
  @TypeGraphQL.Field(_type => WalletWhereInput, {
    nullable: true
  })
  where?: WalletWhereInput | undefined;

  @TypeGraphQL.Field(_type => WalletUpdateWithoutEmailLinksInput, {
    nullable: false
  })
  data!: WalletUpdateWithoutEmailLinksInput;
}
