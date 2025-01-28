import { ObjectLiteral, ValueType } from '../common';
import { __JSONArraySchema } from './array';
import { __JSONObjectSchema } from './object';
import { PrimitiveJSONSchema } from './primitive-json';

export type JSONObjectSchema<T extends ValueType> = __JSONObjectSchema<
  __JSONSchema<T>
>;
export type JSONArraySchema<T extends ValueType> = __JSONArraySchema<
  __JSONSchema<T>,
  T[]
>;

export type __JSONSchema<T extends ValueType = ValueType> =
  | PrimitiveJSONSchema
  | JSONObjectSchema<T>
  | JSONArraySchema<T>;

export type JSONSchema<O extends ObjectLiteral = ObjectLiteral> =
  ObjectLiteral &
    (
      | __JSONSchema<string>
      | __JSONSchema<number>
      | __JSONSchema<boolean>
      | __JSONSchema<O>
    );
