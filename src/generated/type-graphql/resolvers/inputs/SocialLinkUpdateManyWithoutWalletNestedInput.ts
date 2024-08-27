import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SocialLinkCreateManyWalletInputEnvelope } from "../inputs/SocialLinkCreateManyWalletInputEnvelope";
import { SocialLinkCreateOrConnectWithoutWalletInput } from "../inputs/SocialLinkCreateOrConnectWithoutWalletInput";
import { SocialLinkCreateWithoutWalletInput } from "../inputs/SocialLinkCreateWithoutWalletInput";
import { SocialLinkScalarWhereInput } from "../inputs/SocialLinkScalarWhereInput";
import { SocialLinkUpdateManyWithWhereWithoutWalletInput } from "../inputs/SocialLinkUpdateManyWithWhereWithoutWalletInput";
import { SocialLinkUpdateWithWhereUniqueWithoutWalletInput } from "../inputs/SocialLinkUpdateWithWhereUniqueWithoutWalletInput";
import { SocialLinkUpsertWithWhereUniqueWithoutWalletInput } from "../inputs/SocialLinkUpsertWithWhereUniqueWithoutWalletInput";
import { SocialLinkWhereUniqueInput } from "../inputs/SocialLinkWhereUniqueInput";

@TypeGraphQL.InputType("SocialLinkUpdateManyWithoutWalletNestedInput", {})
export class SocialLinkUpdateManyWithoutWalletNestedInput {
  @TypeGraphQL.Field(_type => [SocialLinkCreateWithoutWalletInput], {
    nullable: true
  })
  create?: SocialLinkCreateWithoutWalletInput[] | undefined;

  @TypeGraphQL.Field(_type => [SocialLinkCreateOrConnectWithoutWalletInput], {
    nullable: true
  })
  connectOrCreate?: SocialLinkCreateOrConnectWithoutWalletInput[] | undefined;

  @TypeGraphQL.Field(_type => [SocialLinkUpsertWithWhereUniqueWithoutWalletInput], {
    nullable: true
  })
  upsert?: SocialLinkUpsertWithWhereUniqueWithoutWalletInput[] | undefined;

  @TypeGraphQL.Field(_type => SocialLinkCreateManyWalletInputEnvelope, {
    nullable: true
  })
  createMany?: SocialLinkCreateManyWalletInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SocialLinkWhereUniqueInput], {
    nullable: true
  })
  set?: SocialLinkWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SocialLinkWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SocialLinkWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SocialLinkWhereUniqueInput], {
    nullable: true
  })
  delete?: SocialLinkWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SocialLinkWhereUniqueInput], {
    nullable: true
  })
  connect?: SocialLinkWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SocialLinkUpdateWithWhereUniqueWithoutWalletInput], {
    nullable: true
  })
  update?: SocialLinkUpdateWithWhereUniqueWithoutWalletInput[] | undefined;

  @TypeGraphQL.Field(_type => [SocialLinkUpdateManyWithWhereWithoutWalletInput], {
    nullable: true
  })
  updateMany?: SocialLinkUpdateManyWithWhereWithoutWalletInput[] | undefined;

  @TypeGraphQL.Field(_type => [SocialLinkScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SocialLinkScalarWhereInput[] | undefined;
}
