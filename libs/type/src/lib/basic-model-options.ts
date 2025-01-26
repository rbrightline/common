import { BasicPropertyOptions } from './basic-property-options';
import { RelationOptions } from './relation-options';

export type ModelType =
  | 'entity'
  | 'dto'
  | 'class'
  | 'enum'
  | 'type'
  | 'interface'
  | 'constant';

export type BasicCommonModelOptions = {
  name: string;
  description?: string;
};

export type BasicEnumModelOptions = {
  type: 'enum';
  enum: string[];
};

export type BasicConstantModelOptions = {
  type: 'constant';
  constant: any;
};

export type BasicClassOptions<
  P extends BasicPropertyOptions,
  R extends RelationOptions = RelationOptions
> = {
  type: 'class' | 'dto' | 'interface' | 'entity' | 'type';
  properties?: P[];
  extendings?: string[];
  implementings?: string[];
  relations?: R[];
  uniques?: string[];
};

export type BasicModelOptions<
  T extends BasicPropertyOptions = BasicPropertyOptions
> = BasicCommonModelOptions &
  (BasicClassOptions<T> | BasicEnumModelOptions | BasicConstantModelOptions);
