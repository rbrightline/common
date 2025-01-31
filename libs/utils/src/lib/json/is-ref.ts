import { JSONSchema, PickRequired } from '@rline/type';
/**
 * Check the schema is a reference schema
 * @param schema
 * @returns
 */
export function isRef(
  schema: JSONSchema
): schema is PickRequired<JSONSchema, '$ref'> {
  return !!(schema as PickRequired<JSONSchema, '$ref'>).$ref;
}
