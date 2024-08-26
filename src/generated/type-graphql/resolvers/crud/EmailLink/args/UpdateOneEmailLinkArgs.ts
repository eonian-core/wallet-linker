import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmailLinkUpdateInput } from "../../../inputs/EmailLinkUpdateInput";
import { EmailLinkWhereUniqueInput } from "../../../inputs/EmailLinkWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneEmailLinkArgs {
  @TypeGraphQL.Field(_type => EmailLinkUpdateInput, {
    nullable: false
  })
  data!: EmailLinkUpdateInput;

  @TypeGraphQL.Field(_type => EmailLinkWhereUniqueInput, {
    nullable: false
  })
  where!: EmailLinkWhereUniqueInput;
}
