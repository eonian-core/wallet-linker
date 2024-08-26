import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletAvgOrderByAggregateInput } from "../inputs/WalletAvgOrderByAggregateInput";
import { WalletCountOrderByAggregateInput } from "../inputs/WalletCountOrderByAggregateInput";
import { WalletMaxOrderByAggregateInput } from "../inputs/WalletMaxOrderByAggregateInput";
import { WalletMinOrderByAggregateInput } from "../inputs/WalletMinOrderByAggregateInput";
import { WalletSumOrderByAggregateInput } from "../inputs/WalletSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("WalletOrderByWithAggregationInput", {})
export class WalletOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => WalletCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: WalletCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WalletAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: WalletAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WalletMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: WalletMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WalletMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: WalletMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WalletSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: WalletSumOrderByAggregateInput | undefined;
}
