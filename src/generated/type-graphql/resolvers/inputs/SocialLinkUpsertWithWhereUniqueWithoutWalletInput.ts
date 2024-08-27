import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SocialLinkCreateWithoutWalletInput } from "../inputs/SocialLinkCreateWithoutWalletInput";
import { SocialLinkUpdateWithoutWalletInput } from "../inputs/SocialLinkUpdateWithoutWalletInput";
import { SocialLinkWhereUniqueInput } from "../inputs/SocialLinkWhereUniqueInput";

@TypeGraphQL.InputType("SocialLinkUpsertWithWhereUniqueWithoutWalletInput", {})
export class SocialLinkUpsertWithWhereUniqueWithoutWalletInput {
  @TypeGraphQL.Field(_type => SocialLinkWhereUniqueInput, {
    nullable: false
  })
  where!: SocialLinkWhereUniqueInput;

  @TypeGraphQL.Field(_type => SocialLinkUpdateWithoutWalletInput, {
    nullable: false
  })
  update!: SocialLinkUpdateWithoutWalletInput;

  @TypeGraphQL.Field(_type => SocialLinkCreateWithoutWalletInput, {
    nullable: false
  })
  create!: SocialLinkCreateWithoutWalletInput;
}
