import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SocialLinkUpdateInput } from "../../../inputs/SocialLinkUpdateInput";
import { SocialLinkWhereUniqueInput } from "../../../inputs/SocialLinkWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSocialLinkArgs {
  @TypeGraphQL.Field(_type => SocialLinkUpdateInput, {
    nullable: false
  })
  data!: SocialLinkUpdateInput;

  @TypeGraphQL.Field(_type => SocialLinkWhereUniqueInput, {
    nullable: false
  })
  where!: SocialLinkWhereUniqueInput;
}
