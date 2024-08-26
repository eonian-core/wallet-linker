import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SocialLinkCreateManyInput } from "../../../inputs/SocialLinkCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySocialLinkArgs {
  @TypeGraphQL.Field(_type => [SocialLinkCreateManyInput], {
    nullable: false
  })
  data!: SocialLinkCreateManyInput[];
}
