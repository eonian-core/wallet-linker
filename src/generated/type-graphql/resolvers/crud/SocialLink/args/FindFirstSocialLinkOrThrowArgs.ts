import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SocialLinkOrderByWithRelationInput } from "../../../inputs/SocialLinkOrderByWithRelationInput";
import { SocialLinkWhereInput } from "../../../inputs/SocialLinkWhereInput";
import { SocialLinkWhereUniqueInput } from "../../../inputs/SocialLinkWhereUniqueInput";
import { SocialLinkScalarFieldEnum } from "../../../../enums/SocialLinkScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSocialLinkOrThrowArgs {
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

  @TypeGraphQL.Field(_type => [SocialLinkScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "createdBy" | "deletedAt" | "deltedBy" | "walletId" | "platform" | "username"> | undefined;
}
