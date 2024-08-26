import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmailLinkOrderByWithAggregationInput } from "../../../inputs/EmailLinkOrderByWithAggregationInput";
import { EmailLinkScalarWhereWithAggregatesInput } from "../../../inputs/EmailLinkScalarWhereWithAggregatesInput";
import { EmailLinkWhereInput } from "../../../inputs/EmailLinkWhereInput";
import { EmailLinkScalarFieldEnum } from "../../../../enums/EmailLinkScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEmailLinkArgs {
  @TypeGraphQL.Field(_type => EmailLinkWhereInput, {
    nullable: true
  })
  where?: EmailLinkWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EmailLinkOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: EmailLinkOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmailLinkScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "createdBy" | "deletedAt" | "deltedBy" | "walletId" | "email">;

  @TypeGraphQL.Field(_type => EmailLinkScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: EmailLinkScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
