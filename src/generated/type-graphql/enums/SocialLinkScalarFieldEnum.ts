import * as TypeGraphQL from "type-graphql";

export enum SocialLinkScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  createdBy = "createdBy",
  deletedAt = "deletedAt",
  deltedBy = "deltedBy",
  walletId = "walletId",
  platform = "platform",
  username = "username"
}
TypeGraphQL.registerEnumType(SocialLinkScalarFieldEnum, {
  name: "SocialLinkScalarFieldEnum",
  description: undefined,
});
