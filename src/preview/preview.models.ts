import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("WalletPreview", {})
export class WalletPreview {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  /**
   * Wallet address
   */
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: "Wallet address"
  })
  address!: string;

  /**
   * Chain id, ex. 1 for Ethereum, 56 for Binance Smart Chain
   */
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: "Chain id, ex. 1 for Ethereum, 56 for Binance Smart Chain"
  })
  chainId!: number;

  emailLink?: EmailLinkPreview;
}

@TypeGraphQL.ObjectType("EmailLinkPreview", {})
export class EmailLinkPreview {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  wallet?: WalletPreview | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  walletId?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;
}
