import { ObjectLiteral, ValueType } from '../common';
import { __JSONArraySchema } from './array';
import { JSONConditionalSchema } from './conditional';
import { __JSONObjectSchema } from './object';
import { JSONPrimitiveSchema } from './primitive-json';

export type __JSONSchema<
  S = any,
  O extends ObjectLiteral = ObjectLiteral,
  T extends ValueType = ValueType
> = JSONConditionalSchema &
  (JSONPrimitiveSchema | __JSONObjectSchema<S, O> | __JSONArraySchema<T>);

export type JSONSchema = __JSONSchema<__JSONSchema<__JSONSchema<any>>>;

export type JSONObjectSchema = __JSONObjectSchema<JSONSchema>;
export type JSONArraySchema = __JSONArraySchema<JSONSchema>;
