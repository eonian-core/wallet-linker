import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletCountEmailLinksArgs } from "./args/WalletCountEmailLinksArgs";
import { WalletCountSocialLinksArgs } from "./args/WalletCountSocialLinksArgs";

@TypeGraphQL.ObjectType("WalletCount", {})
export class WalletCount {
  emailLinks!: number;
  socialLinks!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "emailLinks",
    nullable: false
  })
  getEmailLinks(@TypeGraphQL.Root() root: WalletCount, @TypeGraphQL.Args() args: WalletCountEmailLinksArgs): number {
    return root.emailLinks;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "socialLinks",
    nullable: false
  })
  getSocialLinks(@TypeGraphQL.Root() root: WalletCount, @TypeGraphQL.Args() args: WalletCountSocialLinksArgs): number {
    return root.socialLinks;
  }
}
