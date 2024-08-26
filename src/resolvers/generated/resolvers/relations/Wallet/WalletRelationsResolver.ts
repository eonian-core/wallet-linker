import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { EmailLink } from "../../../models/EmailLink";
import { SocialLink } from "../../../models/SocialLink";
import { Wallet } from "../../../models/Wallet";
import { WalletEmailLinksArgs } from "./args/WalletEmailLinksArgs";
import { WalletSocialLinksArgs } from "./args/WalletSocialLinksArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wallet)
export class WalletRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [EmailLink], {
    nullable: false
  })
  async emailLinks(@TypeGraphQL.Root() wallet: Wallet, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: WalletEmailLinksArgs): Promise<EmailLink[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wallet.findUniqueOrThrow({
      where: {
        id: wallet.id,
      },
    }).emailLinks({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [SocialLink], {
    nullable: false
  })
  async socialLinks(@TypeGraphQL.Root() wallet: Wallet, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: WalletSocialLinksArgs): Promise<SocialLink[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wallet.findUniqueOrThrow({
      where: {
        id: wallet.id,
      },
    }).socialLinks({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
