import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SocialLinkCountOrderByAggregateInput } from "../inputs/SocialLinkCountOrderByAggregateInput";
import { SocialLinkMaxOrderByAggregateInput } from "../inputs/SocialLinkMaxOrderByAggregateInput";
import { SocialLinkMinOrderByAggregateInput } from "../inputs/SocialLinkMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SocialLinkOrderByWithAggregationInput", {})
export class SocialLinkOrderByWithAggregationInput {
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
  walletId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  platform?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  username?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SocialLinkCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SocialLinkCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SocialLinkMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SocialLinkMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SocialLinkMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SocialLinkMinOrderByAggregateInput | undefined;
}
