import * as TypeGraphQL from "type-graphql";

export enum WalletScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  createdBy = "createdBy",
  deletedAt = "deletedAt",
  deltedBy = "deltedBy",
  address = "address",
  chainId = "chainId"
}
TypeGraphQL.registerEnumType(WalletScalarFieldEnum, {
  name: "WalletScalarFieldEnum",
  description: undefined,
});
