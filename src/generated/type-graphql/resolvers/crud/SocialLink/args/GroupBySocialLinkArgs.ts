import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SocialLinkOrderByWithAggregationInput } from "../../../inputs/SocialLinkOrderByWithAggregationInput";
import { SocialLinkScalarWhereWithAggregatesInput } from "../../../inputs/SocialLinkScalarWhereWithAggregatesInput";
import { SocialLinkWhereInput } from "../../../inputs/SocialLinkWhereInput";
import { SocialLinkScalarFieldEnum } from "../../../../enums/SocialLinkScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySocialLinkArgs {
  @TypeGraphQL.Field(_type => SocialLinkWhereInput, {
    nullable: true
  })
  where?: SocialLinkWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SocialLinkOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SocialLinkOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SocialLinkScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "createdBy" | "deletedAt" | "deltedBy" | "walletId" | "platform" | "username">;

  @TypeGraphQL.Field(_type => SocialLinkScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SocialLinkScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
