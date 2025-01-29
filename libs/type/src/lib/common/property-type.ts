export type PrimitiveValueType = string | number | boolean;

export type ValueType = PrimitiveValueType | object | Array<ValueType>;

export type PropertyType =
  | 'string'
  | 'number'
  | 'integer'
  | 'boolean'
  | 'object'
  | 'array';
