import { JSONSchema } from '@rline/type';

/**
 * Validate the schema and initialize required properties
 * for referenced schemas, the title is required to create definition key
 * for all schemas, type is required
 * definitions are an empty object by default
 * @param schema
 * @returns
 */
export function validateSchema(schema: JSONSchema): Required<JSONSchema> {
  if (!schema.title) throw new Error('Reference schema must have a title');
  if (!schema.type) throw new Error('Reference schema must have a type');
  if (!schema.definitions) schema.definitions = {};

  return schema as Required<JSONSchema>;
}
