import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EmailLinkUpdateManyWithoutWalletNestedInput } from "../inputs/EmailLinkUpdateManyWithoutWalletNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { SocialLinkUpdateManyWithoutWalletNestedInput } from "../inputs/SocialLinkUpdateManyWithoutWalletNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("WalletUpdateInput", {})
export class WalletUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  createdBy?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  deltedBy?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  address?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  chainId?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EmailLinkUpdateManyWithoutWalletNestedInput, {
    nullable: true
  })
  emailLinks?: EmailLinkUpdateManyWithoutWalletNestedInput | undefined;

  @TypeGraphQL.Field(_type => SocialLinkUpdateManyWithoutWalletNestedInput, {
    nullable: true
  })
  socialLinks?: SocialLinkUpdateManyWithoutWalletNestedInput | undefined;
}
