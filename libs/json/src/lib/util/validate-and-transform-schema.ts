import { JSONSchema } from '@rline/type';

export function validateAndTransformSchema(
  schema: JSONSchema
): Required<JSONSchema> {
  if (!schema.title) throw new Error('Reference schema must have a title');
  if (!schema.type) throw new Error('Reference schema must have a type');
  if (!schema.definitions) schema.definitions = {};

  return schema as Required<JSONSchema>;
}
