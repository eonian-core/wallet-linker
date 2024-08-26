import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletAvgAggregate } from "../outputs/WalletAvgAggregate";
import { WalletCountAggregate } from "../outputs/WalletCountAggregate";
import { WalletMaxAggregate } from "../outputs/WalletMaxAggregate";
import { WalletMinAggregate } from "../outputs/WalletMinAggregate";
import { WalletSumAggregate } from "../outputs/WalletSumAggregate";

@TypeGraphQL.ObjectType("AggregateWallet", {})
export class AggregateWallet {
  @TypeGraphQL.Field(_type => WalletCountAggregate, {
    nullable: true
  })
  _count!: WalletCountAggregate | null;

  @TypeGraphQL.Field(_type => WalletAvgAggregate, {
    nullable: true
  })
  _avg!: WalletAvgAggregate | null;

  @TypeGraphQL.Field(_type => WalletSumAggregate, {
    nullable: true
  })
  _sum!: WalletSumAggregate | null;

  @TypeGraphQL.Field(_type => WalletMinAggregate, {
    nullable: true
  })
  _min!: WalletMinAggregate | null;

  @TypeGraphQL.Field(_type => WalletMaxAggregate, {
    nullable: true
  })
  _max!: WalletMaxAggregate | null;
}
