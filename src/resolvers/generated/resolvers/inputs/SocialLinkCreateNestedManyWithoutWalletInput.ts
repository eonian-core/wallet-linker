import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SocialLinkCreateManyWalletInputEnvelope } from "../inputs/SocialLinkCreateManyWalletInputEnvelope";
import { SocialLinkCreateOrConnectWithoutWalletInput } from "../inputs/SocialLinkCreateOrConnectWithoutWalletInput";
import { SocialLinkCreateWithoutWalletInput } from "../inputs/SocialLinkCreateWithoutWalletInput";
import { SocialLinkWhereUniqueInput } from "../inputs/SocialLinkWhereUniqueInput";

@TypeGraphQL.InputType("SocialLinkCreateNestedManyWithoutWalletInput", {})
export class SocialLinkCreateNestedManyWithoutWalletInput {
  @TypeGraphQL.Field(_type => [SocialLinkCreateWithoutWalletInput], {
    nullable: true
  })
  create?: SocialLinkCreateWithoutWalletInput[] | undefined;

  @TypeGraphQL.Field(_type => [SocialLinkCreateOrConnectWithoutWalletInput], {
    nullable: true
  })
  connectOrCreate?: SocialLinkCreateOrConnectWithoutWalletInput[] | undefined;

  @TypeGraphQL.Field(_type => SocialLinkCreateManyWalletInputEnvelope, {
    nullable: true
  })
  createMany?: SocialLinkCreateManyWalletInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SocialLinkWhereUniqueInput], {
    nullable: true
  })
  connect?: SocialLinkWhereUniqueInput[] | undefined;
}
