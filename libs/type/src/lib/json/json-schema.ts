import { ObjectLiteral, ValueType } from '../common';
import {
  ArraySchemaRaw,
  BooleanSchemaRaw,
  CommonSchema,
  ExtraSchema,
  NumberSchemaRaw,
  ObjectSchemaRaw,
  StringSchemaRaw,
} from './raw';

export type CT<Schema, RawSchema, ValueType> = CommonSchema<ValueType> &
  ExtraSchema<Schema> &
  RawSchema;

export type StringSchema<Schema> = CT<Schema, StringSchemaRaw, string>;
export type NumberSchema<Schema> = CT<Schema, NumberSchemaRaw, number>;
export type BooleanSchema<Schema> = CT<Schema, BooleanSchemaRaw, boolean>;
export type ObjectSchema<Schema> = CT<
  Schema,
  ObjectSchemaRaw<Schema>,
  ObjectLiteral
>;

export type ArraySchema<Schema> = ExtraSchema<Schema> &
  CommonSchema<ValueType[]> &
  ArraySchemaRaw<Schema>;

export type __JSONSchema<Schema> =
  | StringSchema<Schema>
  | NumberSchema<Schema>
  | BooleanSchema<Schema>
  | ObjectSchema<Schema>
  | ArraySchema<Schema>;

export type JSONSchema = __JSONSchema<
  __JSONSchema<__JSONSchema<__JSONSchema<__JSONSchema<any>>>>
>;
