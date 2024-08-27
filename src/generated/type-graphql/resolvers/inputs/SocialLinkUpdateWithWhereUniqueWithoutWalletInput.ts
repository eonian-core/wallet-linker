import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SocialLinkUpdateWithoutWalletInput } from "../inputs/SocialLinkUpdateWithoutWalletInput";
import { SocialLinkWhereUniqueInput } from "../inputs/SocialLinkWhereUniqueInput";

@TypeGraphQL.InputType("SocialLinkUpdateWithWhereUniqueWithoutWalletInput", {})
export class SocialLinkUpdateWithWhereUniqueWithoutWalletInput {
  @TypeGraphQL.Field(_type => SocialLinkWhereUniqueInput, {
    nullable: false
  })
  where!: SocialLinkWhereUniqueInput;

  @TypeGraphQL.Field(_type => SocialLinkUpdateWithoutWalletInput, {
    nullable: false
  })
  data!: SocialLinkUpdateWithoutWalletInput;
}
