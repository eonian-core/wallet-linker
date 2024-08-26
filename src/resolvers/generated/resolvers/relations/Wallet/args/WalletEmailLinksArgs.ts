import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmailLinkOrderByWithRelationInput } from "../../../inputs/EmailLinkOrderByWithRelationInput";
import { EmailLinkWhereInput } from "../../../inputs/EmailLinkWhereInput";
import { EmailLinkWhereUniqueInput } from "../../../inputs/EmailLinkWhereUniqueInput";
import { EmailLinkScalarFieldEnum } from "../../../../enums/EmailLinkScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class WalletEmailLinksArgs {
  @TypeGraphQL.Field(_type => EmailLinkWhereInput, {
    nullable: true
  })
  where?: EmailLinkWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EmailLinkOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: EmailLinkOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => EmailLinkWhereUniqueInput, {
    nullable: true
  })
  cursor?: EmailLinkWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [EmailLinkScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "createdBy" | "deletedAt" | "deltedBy" | "walletId" | "email"> | undefined;
}
