import { ObjectLiteral } from '../common';
import { JSONCommonSchema } from './common';

export class __JSONObjectSchema<
  S,
  O extends ObjectLiteral = ObjectLiteral
> extends JSONCommonSchema<O> {
  type: 'object';
  properties?: Record<string, S>;
  patternProperties?: Record<string, S>;
  propertyNames?: S;
  additionalItems?: S | boolean;
  additionalProperties?: S | boolean;
  maxProperties?: number;
  minProperties?: number;

  /**
   * Required properties
   */
  required?: string[];

  /**
   * A map of property names to either an array of property names or a schema. An array of property names means the property named in the key depends on the properties in the array being present in the object in order to be valid. If the value is a schema, then the schema is only applied to the object if the property in the key exists on the object.
   */
  dependencies?: Record<string, string[]>;
}
