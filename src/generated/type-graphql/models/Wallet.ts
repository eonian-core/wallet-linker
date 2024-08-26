import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { EmailLink } from "../models/EmailLink";
import { SocialLink } from "../models/SocialLink";
import { WalletCount } from "../resolvers/outputs/WalletCount";

@TypeGraphQL.ObjectType("Wallet", {})
export class Wallet {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  /**
   * Initiator of the create action. Ex. user, admin
   */
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: "Initiator of the create action. Ex. user, admin"
  })
  createdBy!: string;

  /**
   * soft delete, if set then deleted
   */
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: "soft delete, if set then deleted"
  })
  deletedAt?: Date | null;

  /**
   * Initiator of the delete action. Ex. user, admin
   */
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: "Initiator of the delete action. Ex. user, admin"
  })
  deltedBy?: string | null;

  /**
   * Wallet address
   */
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: "Wallet address"
  })
  address!: string;

  /**
   * Chain id, ex. 1 for Ethereum, 56 for Binance Smart Chain
   */
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: "Chain id, ex. 1 for Ethereum, 56 for Binance Smart Chain"
  })
  chainId!: number;

  emailLinks?: EmailLink[];

  socialLinks?: SocialLink[];

  @TypeGraphQL.Field(_type => WalletCount, {
    nullable: true
  })
  _count?: WalletCount | null;
}
