import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmailLinkCreateManyWalletInputEnvelope } from "../inputs/EmailLinkCreateManyWalletInputEnvelope";
import { EmailLinkCreateOrConnectWithoutWalletInput } from "../inputs/EmailLinkCreateOrConnectWithoutWalletInput";
import { EmailLinkCreateWithoutWalletInput } from "../inputs/EmailLinkCreateWithoutWalletInput";
import { EmailLinkWhereUniqueInput } from "../inputs/EmailLinkWhereUniqueInput";

@TypeGraphQL.InputType("EmailLinkCreateNestedManyWithoutWalletInput", {})
export class EmailLinkCreateNestedManyWithoutWalletInput {
  @TypeGraphQL.Field(_type => [EmailLinkCreateWithoutWalletInput], {
    nullable: true
  })
  create?: EmailLinkCreateWithoutWalletInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmailLinkCreateOrConnectWithoutWalletInput], {
    nullable: true
  })
  connectOrCreate?: EmailLinkCreateOrConnectWithoutWalletInput[] | undefined;

  @TypeGraphQL.Field(_type => EmailLinkCreateManyWalletInputEnvelope, {
    nullable: true
  })
  createMany?: EmailLinkCreateManyWalletInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EmailLinkWhereUniqueInput], {
    nullable: true
  })
  connect?: EmailLinkWhereUniqueInput[] | undefined;
}
