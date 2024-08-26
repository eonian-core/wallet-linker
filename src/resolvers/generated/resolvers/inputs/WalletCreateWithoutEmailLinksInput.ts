import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SocialLinkCreateNestedManyWithoutWalletInput } from "../inputs/SocialLinkCreateNestedManyWithoutWalletInput";

@TypeGraphQL.InputType("WalletCreateWithoutEmailLinksInput", {})
export class WalletCreateWithoutEmailLinksInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  createdBy!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  deltedBy?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  address!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  chainId!: number;

  @TypeGraphQL.Field(_type => SocialLinkCreateNestedManyWithoutWalletInput, {
    nullable: true
  })
  socialLinks?: SocialLinkCreateNestedManyWithoutWalletInput | undefined;
}