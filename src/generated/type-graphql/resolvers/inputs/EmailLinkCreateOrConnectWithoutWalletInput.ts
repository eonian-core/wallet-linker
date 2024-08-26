import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmailLinkCreateWithoutWalletInput } from "../inputs/EmailLinkCreateWithoutWalletInput";
import { EmailLinkWhereUniqueInput } from "../inputs/EmailLinkWhereUniqueInput";

@TypeGraphQL.InputType("EmailLinkCreateOrConnectWithoutWalletInput", {})
export class EmailLinkCreateOrConnectWithoutWalletInput {
  @TypeGraphQL.Field(_type => EmailLinkWhereUniqueInput, {
    nullable: false
  })
  where!: EmailLinkWhereUniqueInput;

  @TypeGraphQL.Field(_type => EmailLinkCreateWithoutWalletInput, {
    nullable: false
  })
  create!: EmailLinkCreateWithoutWalletInput;
}
