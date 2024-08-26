import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WalletWhereInput } from "../../../inputs/WalletWhereInput";

@TypeGraphQL.ArgsType()
export class EmailLinkWalletArgs {
  @TypeGraphQL.Field(_type => WalletWhereInput, {
    nullable: true
  })
  where?: WalletWhereInput | undefined;
}
