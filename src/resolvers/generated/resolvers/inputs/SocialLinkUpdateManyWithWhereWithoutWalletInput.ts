import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SocialLinkScalarWhereInput } from "../inputs/SocialLinkScalarWhereInput";
import { SocialLinkUpdateManyMutationInput } from "../inputs/SocialLinkUpdateManyMutationInput";

@TypeGraphQL.InputType("SocialLinkUpdateManyWithWhereWithoutWalletInput", {})
export class SocialLinkUpdateManyWithWhereWithoutWalletInput {
  @TypeGraphQL.Field(_type => SocialLinkScalarWhereInput, {
    nullable: false
  })
  where!: SocialLinkScalarWhereInput;

  @TypeGraphQL.Field(_type => SocialLinkUpdateManyMutationInput, {
    nullable: false
  })
  data!: SocialLinkUpdateManyMutationInput;
}
