export type SchemaType =
  | 'string'
  | 'number'
  | 'integer'
  | 'object'
  | 'boolean'
  | 'null'
  | 'array';

export type ValueType<T extends SchemaType> = T extends 'string'
  ? string
  : T extends 'number'
  ? number
  : T extends 'integer'
  ? number
  : T extends 'object'
  ? Record<string, any>
  : T extends 'array'
  ? any[]
  : T extends 'boolean'
  ? boolean
  : T extends 'boolean'
  ? boolean
  : null;

export type __JSONSchema<T extends SchemaType = SchemaType> = Partial<{
  $comment: string;
  $id: string;
  $ref: string;
  $schema: string;
  title: string;
  type: T;
  description: string;
  default: ValueType<T>;
  const: ValueType<T>;
  items: __JSONSchema;
  uniqueItems: boolean;
  enum: ValueType<T>[];
  examples: ValueType<T>[];
  //
  exclusiveMaximum: number;
  exclusiveMinimum: number;
  maximum: number;
  maxItems: number;
  maxLength: number;
  maxProperties: number;
  minimum: number;
  minItems: number;
  minLength: number;
  minProperties: number;
  multipleOf: number;
  else: __JSONSchema<T>;
  format: string;
  if: __JSONSchema<T>;
  then: __JSONSchema<T>;
  not: __JSONSchema<T>;
  readOnly: boolean;
  contains: __JSONSchema<T>;
  required: string[];

  //
  dependencies: T;
  properties: Record<string, __JSONSchema>;
  additionalItems: __JSONSchema | boolean;
  additionalProperties: __JSONSchema | boolean;
  pattern: RegExp | string;
  patternProperties: Record<string, __JSONSchema>;
  propertyNames: __JSONSchema;

  //
  allOf: __JSONSchema[];
  anyOf: __JSONSchema[];
  oneOf: __JSONSchema[];
  contentEncoding: string;
  contentMediaType: string;
  definitions: Record<string, __JSONSchema>;
}>;

export type JSONSchema =
  | __JSONSchema<'string'>
  | __JSONSchema<'number'>
  | __JSONSchema<'integer'>
  | __JSONSchema<'boolean'>
  | __JSONSchema<'array'>
  | __JSONSchema<'object'>
  | __JSONSchema<'null'>;
