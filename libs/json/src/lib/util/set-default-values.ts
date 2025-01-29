import { JSONSchema } from '@rline/type';

/**
 * prepare the json schema object for operations by setting default values
 */
export async function setDefaultValues(
  jsonSchema: JSONSchema
): Promise<Required<JSONSchema>> {
  return jsonSchema as Required<JSONSchema>;
}
