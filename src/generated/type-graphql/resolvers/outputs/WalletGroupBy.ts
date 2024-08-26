import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletAvgAggregate } from "../outputs/WalletAvgAggregate";
import { WalletCountAggregate } from "../outputs/WalletCountAggregate";
import { WalletMaxAggregate } from "../outputs/WalletMaxAggregate";
import { WalletMinAggregate } from "../outputs/WalletMinAggregate";
import { WalletSumAggregate } from "../outputs/WalletSumAggregate";

@TypeGraphQL.ObjectType("WalletGroupBy", {})
export class WalletGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  createdBy!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  deletedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  deltedBy!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  address!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  chainId!: number;

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
