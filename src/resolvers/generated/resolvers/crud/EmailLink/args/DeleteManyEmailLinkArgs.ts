import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmailLinkWhereInput } from "../../../inputs/EmailLinkWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyEmailLinkArgs {
  @TypeGraphQL.Field(_type => EmailLinkWhereInput, {
    nullable: true
  })
  where?: EmailLinkWhereInput | undefined;
}
