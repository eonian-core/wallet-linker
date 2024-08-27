import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletCreateNestedOneWithoutEmailLinksInput } from "../inputs/WalletCreateNestedOneWithoutEmailLinksInput";

@TypeGraphQL.InputType("EmailLinkCreateInput", {})
export class EmailLinkCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  createdBy!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  deltedBy?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => WalletCreateNestedOneWithoutEmailLinksInput, {
    nullable: true
  })
  wallet?: WalletCreateNestedOneWithoutEmailLinksInput | undefined;
}
