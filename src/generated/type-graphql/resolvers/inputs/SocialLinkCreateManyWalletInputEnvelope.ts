import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SocialLinkCreateManyWalletInput } from "../inputs/SocialLinkCreateManyWalletInput";

@TypeGraphQL.InputType("SocialLinkCreateManyWalletInputEnvelope", {})
export class SocialLinkCreateManyWalletInputEnvelope {
  @TypeGraphQL.Field(_type => [SocialLinkCreateManyWalletInput], {
    nullable: false
  })
  data!: SocialLinkCreateManyWalletInput[];
}
