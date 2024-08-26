import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SocialLinkWhereUniqueInput } from "../../../inputs/SocialLinkWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSocialLinkArgs {
  @TypeGraphQL.Field(_type => SocialLinkWhereUniqueInput, {
    nullable: false
  })
  where!: SocialLinkWhereUniqueInput;
}