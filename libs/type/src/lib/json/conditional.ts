/**
 * Other common schema properties
 */
export type JSONConditionalSchema<S = any> = {
  /**
   * Describes the format expected for the value. By default, not used for validation
   */
  format?: string;
  /**
   * The validation outcome of the "if" subschema controls which of the "then" or "else" keywords are evaluated.
   */
  if?: S;

  /**
   * The "else" subschema is used for validation when the "if" subschema fails.
   */
  else?: S;
  /**
   * The "then" subschema is used for validation when the "if" subschema succeeds.
   */
  then?: S;
  /**
   * A schema which must not match.
   */
  not?: S;

  /**
   * An array of schemas, all of which must match.
   */
  allOf?: S[];

  /**
   * An array of schemas, where at least one must match.
   */
  anyOf?: S[];

  /**
   * An array of schemas, exactly one of which must match.
   */
  oneOf?: S[];

  /**
   * schema defintions used in the schema
   */
  definitions?: { [key: string]: S };
};
