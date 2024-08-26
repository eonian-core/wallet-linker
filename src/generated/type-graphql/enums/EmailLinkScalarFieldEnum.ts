import * as TypeGraphQL from "type-graphql";

export enum EmailLinkScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  createdBy = "createdBy",
  deletedAt = "deletedAt",
  deltedBy = "deltedBy",
  walletId = "walletId",
  email = "email"
}
TypeGraphQL.registerEnumType(EmailLinkScalarFieldEnum, {
  name: "EmailLinkScalarFieldEnum",
  description: undefined,
});
