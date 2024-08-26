import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletCreateWithoutSocialLinksInput } from "../inputs/WalletCreateWithoutSocialLinksInput";
import { WalletUpdateWithoutSocialLinksInput } from "../inputs/WalletUpdateWithoutSocialLinksInput";
import { WalletWhereInput } from "../inputs/WalletWhereInput";

@TypeGraphQL.InputType("WalletUpsertWithoutSocialLinksInput", {})
export class WalletUpsertWithoutSocialLinksInput {
  @TypeGraphQL.Field(_type => WalletUpdateWithoutSocialLinksInput, {
    nullable: false
  })
  update!: WalletUpdateWithoutSocialLinksInput;

  @TypeGraphQL.Field(_type => WalletCreateWithoutSocialLinksInput, {
    nullable: false
  })
  create!: WalletCreateWithoutSocialLinksInput;

  @TypeGraphQL.Field(_type => WalletWhereInput, {
    nullable: true
  })
  where?: WalletWhereInput | undefined;
}
