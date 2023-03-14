export enum ENodeEnv {
  DEVELOPMENT = "development",
  PRODUCTION = "production",
}

export type IReturnItemFromArray<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
