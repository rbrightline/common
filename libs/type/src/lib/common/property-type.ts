import { ObjectLiteral } from './object-literal';

export type ValueType =
  | string
  | number
  | boolean
  | ObjectLiteral
  | Array<ValueType>;

export type PropertyType =
  | 'string'
  | 'number'
  | 'integer'
  | 'boolean'
  | 'object'
  | 'array';
