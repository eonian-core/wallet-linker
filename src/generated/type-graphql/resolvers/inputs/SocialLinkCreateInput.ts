import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletCreateNestedOneWithoutSocialLinksInput } from "../inputs/WalletCreateNestedOneWithoutSocialLinksInput";

@TypeGraphQL.InputType("SocialLinkCreateInput", {})
export class SocialLinkCreateInput {
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
  platform!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => WalletCreateNestedOneWithoutSocialLinksInput, {
    nullable: true
  })
  wallet?: WalletCreateNestedOneWithoutSocialLinksInput | undefined;
}
