import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SocialLinkWhereInput } from "../../inputs/SocialLinkWhereInput";

@TypeGraphQL.ArgsType()
export class WalletCountSocialLinksArgs {
  @TypeGraphQL.Field(_type => SocialLinkWhereInput, {
    nullable: true
  })
  where?: SocialLinkWhereInput | undefined;
}
