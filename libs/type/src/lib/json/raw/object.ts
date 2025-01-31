export type ObjectSchemaRaw<S> = {
  /**
   * schema type
   */
  type?: 'object';

  /**
   * record of properties
   */
  properties?: Record<string, S>;

  /**
   * record of pattern properties
   */
  patternProperties?: Record<string, S>;

  /**
   * property name schema
   */
  propertyNames?: S;

  /**
   * Additioanl items schema
   */
  additionalItems?: S | boolean;
  /**
   * Additional properties schema
   */
  additionalProperties?: S | boolean;

  /**
   * allowed maximum number of schemas
   */
  maxProperties?: number;
  /**
   * requried minimum number of schemas
   */
  minProperties?: number;

  /**
   * Required properties
   */
  required?: string[];

  /**
   * A map of property names to either an array of property names or a schema. An array of property names means the property named in the key depends on the properties in the array being present in the object in order to be valid. If the value is a schema, then the schema is only applied to the object if the property in the key exists on the object.
   */
  dependencies?: Record<string, string[]>;
};
