import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SocialLinkCreateInput } from "../../../inputs/SocialLinkCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSocialLinkArgs {
  @TypeGraphQL.Field(_type => SocialLinkCreateInput, {
    nullable: false
  })
  data!: SocialLinkCreateInput;
}
