import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmailLinkCreateInput } from "../../../inputs/EmailLinkCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneEmailLinkArgs {
  @TypeGraphQL.Field(_type => EmailLinkCreateInput, {
    nullable: false
  })
  data!: EmailLinkCreateInput;
}
