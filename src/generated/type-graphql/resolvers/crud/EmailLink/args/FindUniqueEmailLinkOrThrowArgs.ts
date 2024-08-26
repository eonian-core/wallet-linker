import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmailLinkWhereUniqueInput } from "../../../inputs/EmailLinkWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueEmailLinkOrThrowArgs {
  @TypeGraphQL.Field(_type => EmailLinkWhereUniqueInput, {
    nullable: false
  })
  where!: EmailLinkWhereUniqueInput;
}
