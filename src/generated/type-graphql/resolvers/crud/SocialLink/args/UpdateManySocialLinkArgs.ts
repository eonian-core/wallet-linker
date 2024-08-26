import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SocialLinkUpdateManyMutationInput } from "../../../inputs/SocialLinkUpdateManyMutationInput";
import { SocialLinkWhereInput } from "../../../inputs/SocialLinkWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySocialLinkArgs {
  @TypeGraphQL.Field(_type => SocialLinkUpdateManyMutationInput, {
    nullable: false
  })
  data!: SocialLinkUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SocialLinkWhereInput, {
    nullable: true
  })
  where?: SocialLinkWhereInput | undefined;
}
