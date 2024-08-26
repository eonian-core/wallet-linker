import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmailLinkUpdateManyMutationInput } from "../../../inputs/EmailLinkUpdateManyMutationInput";
import { EmailLinkWhereInput } from "../../../inputs/EmailLinkWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEmailLinkArgs {
  @TypeGraphQL.Field(_type => EmailLinkUpdateManyMutationInput, {
    nullable: false
  })
  data!: EmailLinkUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => EmailLinkWhereInput, {
    nullable: true
  })
  where?: EmailLinkWhereInput | undefined;
}
