import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SocialLinkCreateInput } from "../../../inputs/SocialLinkCreateInput";
import { SocialLinkUpdateInput } from "../../../inputs/SocialLinkUpdateInput";
import { SocialLinkWhereUniqueInput } from "../../../inputs/SocialLinkWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSocialLinkArgs {
  @TypeGraphQL.Field(_type => SocialLinkWhereUniqueInput, {
    nullable: false
  })
  where!: SocialLinkWhereUniqueInput;

  @TypeGraphQL.Field(_type => SocialLinkCreateInput, {
    nullable: false
  })
  create!: SocialLinkCreateInput;

  @TypeGraphQL.Field(_type => SocialLinkUpdateInput, {
    nullable: false
  })
  update!: SocialLinkUpdateInput;
}
