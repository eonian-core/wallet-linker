import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmailLinkOrderByRelationAggregateInput } from "../inputs/EmailLinkOrderByRelationAggregateInput";
import { SocialLinkOrderByRelationAggregateInput } from "../inputs/SocialLinkOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("WalletOrderByWithRelationInput", {})
export class WalletOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdBy?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  deltedBy?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  address?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  chainId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EmailLinkOrderByRelationAggregateInput, {
    nullable: true
  })
  emailLinks?: EmailLinkOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SocialLinkOrderByRelationAggregateInput, {
    nullable: true
  })
  socialLinks?: SocialLinkOrderByRelationAggregateInput | undefined;
}
