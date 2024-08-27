import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmailLinkWhereInput } from "../inputs/EmailLinkWhereInput";

@TypeGraphQL.InputType("EmailLinkListRelationFilter", {})
export class EmailLinkListRelationFilter {
  @TypeGraphQL.Field(_type => EmailLinkWhereInput, {
    nullable: true
  })
  every?: EmailLinkWhereInput | undefined;

  @TypeGraphQL.Field(_type => EmailLinkWhereInput, {
    nullable: true
  })
  some?: EmailLinkWhereInput | undefined;

  @TypeGraphQL.Field(_type => EmailLinkWhereInput, {
    nullable: true
  })
  none?: EmailLinkWhereInput | undefined;
}
