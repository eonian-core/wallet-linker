import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletCreateOrConnectWithoutEmailLinksInput } from "../inputs/WalletCreateOrConnectWithoutEmailLinksInput";
import { WalletCreateWithoutEmailLinksInput } from "../inputs/WalletCreateWithoutEmailLinksInput";
import { WalletUpdateToOneWithWhereWithoutEmailLinksInput } from "../inputs/WalletUpdateToOneWithWhereWithoutEmailLinksInput";
import { WalletUpsertWithoutEmailLinksInput } from "../inputs/WalletUpsertWithoutEmailLinksInput";
import { WalletWhereInput } from "../inputs/WalletWhereInput";
import { WalletWhereUniqueInput } from "../inputs/WalletWhereUniqueInput";

@TypeGraphQL.InputType("WalletUpdateOneWithoutEmailLinksNestedInput", {})
export class WalletUpdateOneWithoutEmailLinksNestedInput {
  @TypeGraphQL.Field(_type => WalletCreateWithoutEmailLinksInput, {
    nullable: true
  })
  create?: WalletCreateWithoutEmailLinksInput | undefined;

  @TypeGraphQL.Field(_type => WalletCreateOrConnectWithoutEmailLinksInput, {
    nullable: true
  })
  connectOrCreate?: WalletCreateOrConnectWithoutEmailLinksInput | undefined;

  @TypeGraphQL.Field(_type => WalletUpsertWithoutEmailLinksInput, {
    nullable: true
  })
  upsert?: WalletUpsertWithoutEmailLinksInput | undefined;

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

  @TypeGraphQL.Field(_type => WalletUpdateToOneWithWhereWithoutEmailLinksInput, {
    nullable: true
  })
  update?: WalletUpdateToOneWithWhereWithoutEmailLinksInput | undefined;
}
