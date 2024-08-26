import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmailLinkCreateManyWalletInputEnvelope } from "../inputs/EmailLinkCreateManyWalletInputEnvelope";
import { EmailLinkCreateOrConnectWithoutWalletInput } from "../inputs/EmailLinkCreateOrConnectWithoutWalletInput";
import { EmailLinkCreateWithoutWalletInput } from "../inputs/EmailLinkCreateWithoutWalletInput";
import { EmailLinkScalarWhereInput } from "../inputs/EmailLinkScalarWhereInput";
import { EmailLinkUpdateManyWithWhereWithoutWalletInput } from "../inputs/EmailLinkUpdateManyWithWhereWithoutWalletInput";
import { EmailLinkUpdateWithWhereUniqueWithoutWalletInput } from "../inputs/EmailLinkUpdateWithWhereUniqueWithoutWalletInput";
import { EmailLinkUpsertWithWhereUniqueWithoutWalletInput } from "../inputs/EmailLinkUpsertWithWhereUniqueWithoutWalletInput";
import { EmailLinkWhereUniqueInput } from "../inputs/EmailLinkWhereUniqueInput";

@TypeGraphQL.InputType("EmailLinkUpdateManyWithoutWalletNestedInput", {})
export class EmailLinkUpdateManyWithoutWalletNestedInput {
  @TypeGraphQL.Field(_type => [EmailLinkCreateWithoutWalletInput], {
    nullable: true
  })
  create?: EmailLinkCreateWithoutWalletInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmailLinkCreateOrConnectWithoutWalletInput], {
    nullable: true
  })
  connectOrCreate?: EmailLinkCreateOrConnectWithoutWalletInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmailLinkUpsertWithWhereUniqueWithoutWalletInput], {
    nullable: true
  })
  upsert?: EmailLinkUpsertWithWhereUniqueWithoutWalletInput[] | undefined;

  @TypeGraphQL.Field(_type => EmailLinkCreateManyWalletInputEnvelope, {
    nullable: true
  })
  createMany?: EmailLinkCreateManyWalletInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EmailLinkWhereUniqueInput], {
    nullable: true
  })
  set?: EmailLinkWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmailLinkWhereUniqueInput], {
    nullable: true
  })
  disconnect?: EmailLinkWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmailLinkWhereUniqueInput], {
    nullable: true
  })
  delete?: EmailLinkWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmailLinkWhereUniqueInput], {
    nullable: true
  })
  connect?: EmailLinkWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmailLinkUpdateWithWhereUniqueWithoutWalletInput], {
    nullable: true
  })
  update?: EmailLinkUpdateWithWhereUniqueWithoutWalletInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmailLinkUpdateManyWithWhereWithoutWalletInput], {
    nullable: true
  })
  updateMany?: EmailLinkUpdateManyWithWhereWithoutWalletInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmailLinkScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EmailLinkScalarWhereInput[] | undefined;
}
