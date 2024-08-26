import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmailLinkCreateManyInput } from "../../../inputs/EmailLinkCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyEmailLinkArgs {
  @TypeGraphQL.Field(_type => [EmailLinkCreateManyInput], {
    nullable: false
  })
  data!: EmailLinkCreateManyInput[];
}
