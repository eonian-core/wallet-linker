import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletUpdateWithoutSocialLinksInput } from "../inputs/WalletUpdateWithoutSocialLinksInput";
import { WalletWhereInput } from "../inputs/WalletWhereInput";

@TypeGraphQL.InputType("WalletUpdateToOneWithWhereWithoutSocialLinksInput", {})
export class WalletUpdateToOneWithWhereWithoutSocialLinksInput {
  @TypeGraphQL.Field(_type => WalletWhereInput, {
    nullable: true
  })
  where?: WalletWhereInput | undefined;

  @TypeGraphQL.Field(_type => WalletUpdateWithoutSocialLinksInput, {
    nullable: false
  })
  data!: WalletUpdateWithoutSocialLinksInput;
}
