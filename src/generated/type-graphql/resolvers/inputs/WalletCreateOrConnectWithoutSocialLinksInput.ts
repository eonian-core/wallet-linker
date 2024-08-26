import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletCreateWithoutSocialLinksInput } from "../inputs/WalletCreateWithoutSocialLinksInput";
import { WalletWhereUniqueInput } from "../inputs/WalletWhereUniqueInput";

@TypeGraphQL.InputType("WalletCreateOrConnectWithoutSocialLinksInput", {})
export class WalletCreateOrConnectWithoutSocialLinksInput {
  @TypeGraphQL.Field(_type => WalletWhereUniqueInput, {
    nullable: false
  })
  where!: WalletWhereUniqueInput;

  @TypeGraphQL.Field(_type => WalletCreateWithoutSocialLinksInput, {
    nullable: false
  })
  create!: WalletCreateWithoutSocialLinksInput;
}
