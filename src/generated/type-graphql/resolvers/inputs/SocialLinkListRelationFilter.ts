import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SocialLinkWhereInput } from "../inputs/SocialLinkWhereInput";

@TypeGraphQL.InputType("SocialLinkListRelationFilter", {})
export class SocialLinkListRelationFilter {
  @TypeGraphQL.Field(_type => SocialLinkWhereInput, {
    nullable: true
  })
  every?: SocialLinkWhereInput | undefined;

  @TypeGraphQL.Field(_type => SocialLinkWhereInput, {
    nullable: true
  })
  some?: SocialLinkWhereInput | undefined;

  @TypeGraphQL.Field(_type => SocialLinkWhereInput, {
    nullable: true
  })
  none?: SocialLinkWhereInput | undefined;
}
