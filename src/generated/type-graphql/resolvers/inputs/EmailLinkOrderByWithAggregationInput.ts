import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmailLinkCountOrderByAggregateInput } from "../inputs/EmailLinkCountOrderByAggregateInput";
import { EmailLinkMaxOrderByAggregateInput } from "../inputs/EmailLinkMaxOrderByAggregateInput";
import { EmailLinkMinOrderByAggregateInput } from "../inputs/EmailLinkMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EmailLinkOrderByWithAggregationInput", {})
export class EmailLinkOrderByWithAggregationInput {
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
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EmailLinkCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EmailLinkCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EmailLinkMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EmailLinkMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EmailLinkMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EmailLinkMinOrderByAggregateInput | undefined;
}
