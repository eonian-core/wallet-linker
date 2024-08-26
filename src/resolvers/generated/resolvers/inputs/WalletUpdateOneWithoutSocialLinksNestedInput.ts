import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletCreateOrConnectWithoutSocialLinksInput } from "../inputs/WalletCreateOrConnectWithoutSocialLinksInput";
import { WalletCreateWithoutSocialLinksInput } from "../inputs/WalletCreateWithoutSocialLinksInput";
import { WalletUpdateToOneWithWhereWithoutSocialLinksInput } from "../inputs/WalletUpdateToOneWithWhereWithoutSocialLinksInput";
import { WalletUpsertWithoutSocialLinksInput } from "../inputs/WalletUpsertWithoutSocialLinksInput";
import { WalletWhereInput } from "../inputs/WalletWhereInput";
import { WalletWhereUniqueInput } from "../inputs/WalletWhereUniqueInput";

@TypeGraphQL.InputType("WalletUpdateOneWithoutSocialLinksNestedInput", {})
export class WalletUpdateOneWithoutSocialLinksNestedInput {
  @TypeGraphQL.Field(_type => WalletCreateWithoutSocialLinksInput, {
    nullable: true
  })
  create?: WalletCreateWithoutSocialLinksInput | undefined;

  @TypeGraphQL.Field(_type => WalletCreateOrConnectWithoutSocialLinksInput, {
    nullable: true
  })
  connectOrCreate?: WalletCreateOrConnectWithoutSocialLinksInput | undefined;

  @TypeGraphQL.Field(_type => WalletUpsertWithoutSocialLinksInput, {
    nullable: true
  })
  upsert?: WalletUpsertWithoutSocialLinksInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => WalletWhereInput, {
    nullable: true
  })
  delete?: WalletWhereInput | undefined;

  @TypeGraphQL.Field(_type => WalletWhereUniqueInput, {
    nullable: true
  })
  connect?: WalletWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => WalletUpdateToOneWithWhereWithoutSocialLinksInput, {
    nullable: true
  })
  update?: WalletUpdateToOneWithWhereWithoutSocialLinksInput | undefined;
}
