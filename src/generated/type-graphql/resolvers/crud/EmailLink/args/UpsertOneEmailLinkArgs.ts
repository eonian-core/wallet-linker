import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmailLinkCreateInput } from "../../../inputs/EmailLinkCreateInput";
import { EmailLinkUpdateInput } from "../../../inputs/EmailLinkUpdateInput";
import { EmailLinkWhereUniqueInput } from "../../../inputs/EmailLinkWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneEmailLinkArgs {
  @TypeGraphQL.Field(_type => EmailLinkWhereUniqueInput, {
    nullable: false
  })
  where!: EmailLinkWhereUniqueInput;

  @TypeGraphQL.Field(_type => EmailLinkCreateInput, {
    nullable: false
  })
  create!: EmailLinkCreateInput;

  @TypeGraphQL.Field(_type => EmailLinkUpdateInput, {
    nullable: false
  })
  update!: EmailLinkUpdateInput;
}
