import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SocialLinkCreateWithoutWalletInput } from "../inputs/SocialLinkCreateWithoutWalletInput";
import { SocialLinkWhereUniqueInput } from "../inputs/SocialLinkWhereUniqueInput";

@TypeGraphQL.InputType("SocialLinkCreateOrConnectWithoutWalletInput", {})
export class SocialLinkCreateOrConnectWithoutWalletInput {
  @TypeGraphQL.Field(_type => SocialLinkWhereUniqueInput, {
    nullable: false
  })
  where!: SocialLinkWhereUniqueInput;

  @TypeGraphQL.Field(_type => SocialLinkCreateWithoutWalletInput, {
    nullable: false
  })
  create!: SocialLinkCreateWithoutWalletInput;
}
