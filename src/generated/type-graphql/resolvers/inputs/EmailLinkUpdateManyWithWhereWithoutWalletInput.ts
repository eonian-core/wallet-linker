import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmailLinkScalarWhereInput } from "../inputs/EmailLinkScalarWhereInput";
import { EmailLinkUpdateManyMutationInput } from "../inputs/EmailLinkUpdateManyMutationInput";

@TypeGraphQL.InputType("EmailLinkUpdateManyWithWhereWithoutWalletInput", {})
export class EmailLinkUpdateManyWithWhereWithoutWalletInput {
  @TypeGraphQL.Field(_type => EmailLinkScalarWhereInput, {
    nullable: false
  })
  where!: EmailLinkScalarWhereInput;

  @TypeGraphQL.Field(_type => EmailLinkUpdateManyMutationInput, {
    nullable: false
  })
  data!: EmailLinkUpdateManyMutationInput;
}
