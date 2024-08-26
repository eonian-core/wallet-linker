import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Wallet } from "../models/Wallet";

@TypeGraphQL.ObjectType("EmailLink", {})
export class EmailLink {
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

  wallet?: Wallet | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  walletId?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;
}
