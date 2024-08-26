import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmailLinkWhereInput } from "../../inputs/EmailLinkWhereInput";

@TypeGraphQL.ArgsType()
export class WalletCountEmailLinksArgs {
  @TypeGraphQL.Field(_type => EmailLinkWhereInput, {
    nullable: true
  })
  where?: EmailLinkWhereInput | undefined;
}
