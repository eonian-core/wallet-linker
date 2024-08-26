import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

const crudResolversMap = {
  Wallet: crudResolvers.WalletCrudResolver,
  EmailLink: crudResolvers.EmailLinkCrudResolver,
  SocialLink: crudResolvers.SocialLinkCrudResolver
};
const actionResolversMap = {
  Wallet: {
    aggregateWallet: actionResolvers.AggregateWalletResolver,
    createManyWallet: actionResolvers.CreateManyWalletResolver,
    createOneWallet: actionResolvers.CreateOneWalletResolver,
    deleteManyWallet: actionResolvers.DeleteManyWalletResolver,
    deleteOneWallet: actionResolvers.DeleteOneWalletResolver,
    findFirstWallet: actionResolvers.FindFirstWalletResolver,
    findFirstWalletOrThrow: actionResolvers.FindFirstWalletOrThrowResolver,
    wallets: actionResolvers.FindManyWalletResolver,
    wallet: actionResolvers.FindUniqueWalletResolver,
    getWallet: actionResolvers.FindUniqueWalletOrThrowResolver,
    groupByWallet: actionResolvers.GroupByWalletResolver,
    updateManyWallet: actionResolvers.UpdateManyWalletResolver,
    updateOneWallet: actionResolvers.UpdateOneWalletResolver,
    upsertOneWallet: actionResolvers.UpsertOneWalletResolver
  },
  EmailLink: {
    aggregateEmailLink: actionResolvers.AggregateEmailLinkResolver,
    createManyEmailLink: actionResolvers.CreateManyEmailLinkResolver,
    createOneEmailLink: actionResolvers.CreateOneEmailLinkResolver,
    deleteManyEmailLink: actionResolvers.DeleteManyEmailLinkResolver,
    deleteOneEmailLink: actionResolvers.DeleteOneEmailLinkResolver,
    findFirstEmailLink: actionResolvers.FindFirstEmailLinkResolver,
    findFirstEmailLinkOrThrow: actionResolvers.FindFirstEmailLinkOrThrowResolver,
    emailLinks: actionResolvers.FindManyEmailLinkResolver,
    emailLink: actionResolvers.FindUniqueEmailLinkResolver,
    getEmailLink: actionResolvers.FindUniqueEmailLinkOrThrowResolver,
    groupByEmailLink: actionResolvers.GroupByEmailLinkResolver,
    updateManyEmailLink: actionResolvers.UpdateManyEmailLinkResolver,
    updateOneEmailLink: actionResolvers.UpdateOneEmailLinkResolver,
    upsertOneEmailLink: actionResolvers.UpsertOneEmailLinkResolver
  },
  SocialLink: {
    aggregateSocialLink: actionResolvers.AggregateSocialLinkResolver,
    createManySocialLink: actionResolvers.CreateManySocialLinkResolver,
    createOneSocialLink: actionResolvers.CreateOneSocialLinkResolver,
    deleteManySocialLink: actionResolvers.DeleteManySocialLinkResolver,
    deleteOneSocialLink: actionResolvers.DeleteOneSocialLinkResolver,
    findFirstSocialLink: actionResolvers.FindFirstSocialLinkResolver,
    findFirstSocialLinkOrThrow: actionResolvers.FindFirstSocialLinkOrThrowResolver,
    socialLinks: actionResolvers.FindManySocialLinkResolver,
    socialLink: actionResolvers.FindUniqueSocialLinkResolver,
    getSocialLink: actionResolvers.FindUniqueSocialLinkOrThrowResolver,
    groupBySocialLink: actionResolvers.GroupBySocialLinkResolver,
    updateManySocialLink: actionResolvers.UpdateManySocialLinkResolver,
    updateOneSocialLink: actionResolvers.UpdateOneSocialLinkResolver,
    upsertOneSocialLink: actionResolvers.UpsertOneSocialLinkResolver
  }
};
const crudResolversInfo = {
  Wallet: ["aggregateWallet", "createManyWallet", "createOneWallet", "deleteManyWallet", "deleteOneWallet", "findFirstWallet", "findFirstWalletOrThrow", "wallets", "wallet", "getWallet", "groupByWallet", "updateManyWallet", "updateOneWallet", "upsertOneWallet"],
  EmailLink: ["aggregateEmailLink", "createManyEmailLink", "createOneEmailLink", "deleteManyEmailLink", "deleteOneEmailLink", "findFirstEmailLink", "findFirstEmailLinkOrThrow", "emailLinks", "emailLink", "getEmailLink", "groupByEmailLink", "updateManyEmailLink", "updateOneEmailLink", "upsertOneEmailLink"],
  SocialLink: ["aggregateSocialLink", "createManySocialLink", "createOneSocialLink", "deleteManySocialLink", "deleteOneSocialLink", "findFirstSocialLink", "findFirstSocialLinkOrThrow", "socialLinks", "socialLink", "getSocialLink", "groupBySocialLink", "updateManySocialLink", "updateOneSocialLink", "upsertOneSocialLink"]
};
const argsInfo = {
  AggregateWalletArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyWalletArgs: ["data"],
  CreateOneWalletArgs: ["data"],
  DeleteManyWalletArgs: ["where"],
  DeleteOneWalletArgs: ["where"],
  FindFirstWalletArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstWalletOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyWalletArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueWalletArgs: ["where"],
  FindUniqueWalletOrThrowArgs: ["where"],
  GroupByWalletArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyWalletArgs: ["data", "where"],
  UpdateOneWalletArgs: ["data", "where"],
  UpsertOneWalletArgs: ["where", "create", "update"],
  AggregateEmailLinkArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyEmailLinkArgs: ["data"],
  CreateOneEmailLinkArgs: ["data"],
  DeleteManyEmailLinkArgs: ["where"],
  DeleteOneEmailLinkArgs: ["where"],
  FindFirstEmailLinkArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstEmailLinkOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyEmailLinkArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueEmailLinkArgs: ["where"],
  FindUniqueEmailLinkOrThrowArgs: ["where"],
  GroupByEmailLinkArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyEmailLinkArgs: ["data", "where"],
  UpdateOneEmailLinkArgs: ["data", "where"],
  UpsertOneEmailLinkArgs: ["where", "create", "update"],
  AggregateSocialLinkArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManySocialLinkArgs: ["data"],
  CreateOneSocialLinkArgs: ["data"],
  DeleteManySocialLinkArgs: ["where"],
  DeleteOneSocialLinkArgs: ["where"],
  FindFirstSocialLinkArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstSocialLinkOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySocialLinkArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueSocialLinkArgs: ["where"],
  FindUniqueSocialLinkOrThrowArgs: ["where"],
  GroupBySocialLinkArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManySocialLinkArgs: ["data", "where"],
  UpdateOneSocialLinkArgs: ["data", "where"],
  UpsertOneSocialLinkArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & {
    _all?: MethodDecorator[];
    _query?: MethodDecorator[];
    _mutation?: MethodDecorator[];
  };

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  const mutationOperationPrefixes = [
    "createOne", "createMany", "createManyAndReturn", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
  ];
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all;
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
      const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
      const mainDecorators = [
        ...allActionsDecorators ?? [],
        ...operationKindDecorators ?? [],
      ]
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(mainDecorators);
      } else {
        decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Wallet: relationResolvers.WalletRelationsResolver,
  EmailLink: relationResolvers.EmailLinkRelationsResolver,
  SocialLink: relationResolvers.SocialLinkRelationsResolver
};
const relationResolversInfo = {
  Wallet: ["emailLinks", "socialLinks"],
  EmailLink: ["wallet"],
  SocialLink: ["wallet"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { _all?: MethodDecorator[] };

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    const allActionsDecorators = relationResolverActionsConfig._all ?? [];
    const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
    for (const relationResolverActionName of relationResolverActionNames) {
      const maybeDecoratorsOrFn = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[
        typeFieldName
      ] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Wallet: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "address", "chainId"],
  EmailLink: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "walletId", "email"],
  SocialLink: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "walletId", "platform", "username"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateWallet: ["_count", "_avg", "_sum", "_min", "_max"],
  WalletGroupBy: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "address", "chainId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateEmailLink: ["_count", "_min", "_max"],
  EmailLinkGroupBy: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "walletId", "email", "_count", "_min", "_max"],
  AggregateSocialLink: ["_count", "_min", "_max"],
  SocialLinkGroupBy: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "walletId", "platform", "username", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  WalletCount: ["emailLinks", "socialLinks"],
  WalletCountAggregate: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "address", "chainId", "_all"],
  WalletAvgAggregate: ["chainId"],
  WalletSumAggregate: ["chainId"],
  WalletMinAggregate: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "address", "chainId"],
  WalletMaxAggregate: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "address", "chainId"],
  EmailLinkCountAggregate: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "walletId", "email", "_all"],
  EmailLinkMinAggregate: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "walletId", "email"],
  EmailLinkMaxAggregate: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "walletId", "email"],
  SocialLinkCountAggregate: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "walletId", "platform", "username", "_all"],
  SocialLinkMinAggregate: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "walletId", "platform", "username"],
  SocialLinkMaxAggregate: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "walletId", "platform", "username"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  WalletWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "createdBy", "deletedAt", "deltedBy", "address", "chainId", "emailLinks", "socialLinks"],
  WalletOrderByWithRelationInput: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "address", "chainId", "emailLinks", "socialLinks"],
  WalletWhereUniqueInput: ["id", "address_chainId", "AND", "OR", "NOT", "createdAt", "createdBy", "deletedAt", "deltedBy", "address", "chainId", "emailLinks", "socialLinks"],
  WalletOrderByWithAggregationInput: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "address", "chainId", "_count", "_avg", "_max", "_min", "_sum"],
  WalletScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "createdBy", "deletedAt", "deltedBy", "address", "chainId"],
  EmailLinkWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "createdBy", "deletedAt", "deltedBy", "walletId", "email", "wallet"],
  EmailLinkOrderByWithRelationInput: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "walletId", "email", "wallet"],
  EmailLinkWhereUniqueInput: ["id", "AND", "OR", "NOT", "createdAt", "createdBy", "deletedAt", "deltedBy", "walletId", "email", "wallet"],
  EmailLinkOrderByWithAggregationInput: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "walletId", "email", "_count", "_max", "_min"],
  EmailLinkScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "createdBy", "deletedAt", "deltedBy", "walletId", "email"],
  SocialLinkWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "createdBy", "deletedAt", "deltedBy", "walletId", "platform", "username", "wallet"],
  SocialLinkOrderByWithRelationInput: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "walletId", "platform", "username", "wallet"],
  SocialLinkWhereUniqueInput: ["id", "AND", "OR", "NOT", "createdAt", "createdBy", "deletedAt", "deltedBy", "walletId", "platform", "username", "wallet"],
  SocialLinkOrderByWithAggregationInput: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "walletId", "platform", "username", "_count", "_max", "_min"],
  SocialLinkScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "createdBy", "deletedAt", "deltedBy", "walletId", "platform", "username"],
  WalletCreateInput: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "address", "chainId", "emailLinks", "socialLinks"],
  WalletUpdateInput: ["createdAt", "createdBy", "deletedAt", "deltedBy", "address", "chainId", "emailLinks", "socialLinks"],
  WalletCreateManyInput: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "address", "chainId"],
  WalletUpdateManyMutationInput: ["createdAt", "createdBy", "deletedAt", "deltedBy", "address", "chainId"],
  EmailLinkCreateInput: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "email", "wallet"],
  EmailLinkUpdateInput: ["createdAt", "createdBy", "deletedAt", "deltedBy", "email", "wallet"],
  EmailLinkCreateManyInput: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "walletId", "email"],
  EmailLinkUpdateManyMutationInput: ["createdAt", "createdBy", "deletedAt", "deltedBy", "email"],
  SocialLinkCreateInput: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "platform", "username", "wallet"],
  SocialLinkUpdateInput: ["createdAt", "createdBy", "deletedAt", "deltedBy", "platform", "username", "wallet"],
  SocialLinkCreateManyInput: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "walletId", "platform", "username"],
  SocialLinkUpdateManyMutationInput: ["createdAt", "createdBy", "deletedAt", "deltedBy", "platform", "username"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "isSet"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "isSet"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  EmailLinkListRelationFilter: ["every", "some", "none"],
  SocialLinkListRelationFilter: ["every", "some", "none"],
  EmailLinkOrderByRelationAggregateInput: ["_count"],
  SocialLinkOrderByRelationAggregateInput: ["_count"],
  WalletAddressChainIdCompoundUniqueInput: ["address", "chainId"],
  WalletCountOrderByAggregateInput: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "address", "chainId"],
  WalletAvgOrderByAggregateInput: ["chainId"],
  WalletMaxOrderByAggregateInput: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "address", "chainId"],
  WalletMinOrderByAggregateInput: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "address", "chainId"],
  WalletSumOrderByAggregateInput: ["chainId"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max", "isSet"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max", "isSet"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  WalletNullableRelationFilter: ["is", "isNot"],
  EmailLinkCountOrderByAggregateInput: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "walletId", "email"],
  EmailLinkMaxOrderByAggregateInput: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "walletId", "email"],
  EmailLinkMinOrderByAggregateInput: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "walletId", "email"],
  SocialLinkCountOrderByAggregateInput: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "walletId", "platform", "username"],
  SocialLinkMaxOrderByAggregateInput: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "walletId", "platform", "username"],
  SocialLinkMinOrderByAggregateInput: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "walletId", "platform", "username"],
  EmailLinkCreateNestedManyWithoutWalletInput: ["create", "connectOrCreate", "createMany", "connect"],
  SocialLinkCreateNestedManyWithoutWalletInput: ["create", "connectOrCreate", "createMany", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableDateTimeFieldUpdateOperationsInput: ["set", "unset"],
  NullableStringFieldUpdateOperationsInput: ["set", "unset"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  EmailLinkUpdateManyWithoutWalletNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SocialLinkUpdateManyWithoutWalletNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  WalletCreateNestedOneWithoutEmailLinksInput: ["create", "connectOrCreate", "connect"],
  WalletUpdateOneWithoutEmailLinksNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  WalletCreateNestedOneWithoutSocialLinksInput: ["create", "connectOrCreate", "connect"],
  WalletUpdateOneWithoutSocialLinksNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "isSet"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "isSet"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max", "isSet"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "isSet"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max", "isSet"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  EmailLinkCreateWithoutWalletInput: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "email"],
  EmailLinkCreateOrConnectWithoutWalletInput: ["where", "create"],
  EmailLinkCreateManyWalletInputEnvelope: ["data"],
  SocialLinkCreateWithoutWalletInput: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "platform", "username"],
  SocialLinkCreateOrConnectWithoutWalletInput: ["where", "create"],
  SocialLinkCreateManyWalletInputEnvelope: ["data"],
  EmailLinkUpsertWithWhereUniqueWithoutWalletInput: ["where", "update", "create"],
  EmailLinkUpdateWithWhereUniqueWithoutWalletInput: ["where", "data"],
  EmailLinkUpdateManyWithWhereWithoutWalletInput: ["where", "data"],
  EmailLinkScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "createdBy", "deletedAt", "deltedBy", "walletId", "email"],
  SocialLinkUpsertWithWhereUniqueWithoutWalletInput: ["where", "update", "create"],
  SocialLinkUpdateWithWhereUniqueWithoutWalletInput: ["where", "data"],
  SocialLinkUpdateManyWithWhereWithoutWalletInput: ["where", "data"],
  SocialLinkScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "createdBy", "deletedAt", "deltedBy", "walletId", "platform", "username"],
  WalletCreateWithoutEmailLinksInput: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "address", "chainId", "socialLinks"],
  WalletCreateOrConnectWithoutEmailLinksInput: ["where", "create"],
  WalletUpsertWithoutEmailLinksInput: ["update", "create", "where"],
  WalletUpdateToOneWithWhereWithoutEmailLinksInput: ["where", "data"],
  WalletUpdateWithoutEmailLinksInput: ["createdAt", "createdBy", "deletedAt", "deltedBy", "address", "chainId", "socialLinks"],
  WalletCreateWithoutSocialLinksInput: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "address", "chainId", "emailLinks"],
  WalletCreateOrConnectWithoutSocialLinksInput: ["where", "create"],
  WalletUpsertWithoutSocialLinksInput: ["update", "create", "where"],
  WalletUpdateToOneWithWhereWithoutSocialLinksInput: ["where", "data"],
  WalletUpdateWithoutSocialLinksInput: ["createdAt", "createdBy", "deletedAt", "deltedBy", "address", "chainId", "emailLinks"],
  EmailLinkCreateManyWalletInput: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "email"],
  SocialLinkCreateManyWalletInput: ["id", "createdAt", "createdBy", "deletedAt", "deltedBy", "platform", "username"],
  EmailLinkUpdateWithoutWalletInput: ["createdAt", "createdBy", "deletedAt", "deltedBy", "email"],
  SocialLinkUpdateWithoutWalletInput: ["createdAt", "createdBy", "deletedAt", "deltedBy", "platform", "username"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

