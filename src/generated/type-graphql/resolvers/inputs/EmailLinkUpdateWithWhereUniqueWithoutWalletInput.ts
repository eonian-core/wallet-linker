import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmailLinkUpdateWithoutWalletInput } from "../inputs/EmailLinkUpdateWithoutWalletInput";
import { EmailLinkWhereUniqueInput } from "../inputs/EmailLinkWhereUniqueInput";

@TypeGraphQL.InputType("EmailLinkUpdateWithWhereUniqueWithoutWalletInput", {})
export class EmailLinkUpdateWithWhereUniqueWithoutWalletInput {
  @TypeGraphQL.Field(_type => EmailLinkWhereUniqueInput, {
    nullable: false
  })
  where!: EmailLinkWhereUniqueInput;

  @TypeGraphQL.Field(_type => EmailLinkUpdateWithoutWalletInput, {
    nullable: false
  })
  data!: EmailLinkUpdateWithoutWalletInput;
}
