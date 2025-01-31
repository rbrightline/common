import { JSONSchema, RefSchema } from '@rline/type';
/**
 * Check the schema is a reference schema
 * @param schema
 * @returns
 */
export function isRef(schema: JSONSchema): schema is RefSchema {
  return !!(schema as RefSchema).$ref;
}
