import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmailLinkCreateManyWalletInput } from "../inputs/EmailLinkCreateManyWalletInput";

@TypeGraphQL.InputType("EmailLinkCreateManyWalletInputEnvelope", {})
export class EmailLinkCreateManyWalletInputEnvelope {
  @TypeGraphQL.Field(_type => [EmailLinkCreateManyWalletInput], {
    nullable: false
  })
  data!: EmailLinkCreateManyWalletInput[];
}
