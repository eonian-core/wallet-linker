import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletCreateOrConnectWithoutSocialLinksInput } from "../inputs/WalletCreateOrConnectWithoutSocialLinksInput";
import { WalletCreateWithoutSocialLinksInput } from "../inputs/WalletCreateWithoutSocialLinksInput";
import { WalletWhereUniqueInput } from "../inputs/WalletWhereUniqueInput";

@TypeGraphQL.InputType("WalletCreateNestedOneWithoutSocialLinksInput", {})
export class WalletCreateNestedOneWithoutSocialLinksInput {
  @TypeGraphQL.Field(_type => WalletCreateWithoutSocialLinksInput, {
    nullable: true
  })
  create?: WalletCreateWithoutSocialLinksInput | undefined;

  @TypeGraphQL.Field(_type => WalletCreateOrConnectWithoutSocialLinksInput, {
    nullable: true
  })
  connectOrCreate?: WalletCreateOrConnectWithoutSocialLinksInput | undefined;

  @TypeGraphQL.Field(_type => WalletWhereUniqueInput, {
    nullable: true
  })
  connect?: WalletWhereUniqueInput | undefined;
}
