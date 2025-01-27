import { ObjectLiteral } from './object-literal';

export type PrimitiveValueType = string | number | boolean;

export type ValueType = PrimitiveValueType | ObjectLiteral | Array<ValueType>;

export type PropertyType =
  | 'string'
  | 'number'
  | 'integer'
  | 'boolean'
  | 'object'
  | 'array';
