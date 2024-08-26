import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SocialLinkOrderByWithRelationInput } from "../../../inputs/SocialLinkOrderByWithRelationInput";
import { SocialLinkWhereInput } from "../../../inputs/SocialLinkWhereInput";
import { SocialLinkWhereUniqueInput } from "../../../inputs/SocialLinkWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSocialLinkArgs {
  @TypeGraphQL.Field(_type => SocialLinkWhereInput, {
    nullable: true
  })
  where?: SocialLinkWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SocialLinkOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SocialLinkOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SocialLinkWhereUniqueInput, {
    nullable: true
  })
  cursor?: SocialLinkWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
