import { readJSONFile } from '@rline/fs';
import { JSONSchema } from '@rline/type';
import { validateSchema } from './validate-schema';

/**
 * Read the $ref path and store the content as definition in the schema
 * @param jsonSchema
 */
export async function __toDefinition(jsonSchema: JSONSchema): Promise<void> {
  // Validate schema
  const s = validateSchema(jsonSchema);
  // Get the key-value pairs of the schema
  const pairs = Object.entries(s);

  // Check the pairs have pairs
  if (pairs.length == 0) return;

  // For each schema property
  for (const [key, value] of pairs) {
    // We are only interested in `$ref` and `$definisions` keys
    // If the key is `$ref`
    if (key == '$ref') {
      // Then read the reference if it is a absolute path

      const rs = await readJSONFile<JSONSchema>(value);

      // s.definitions[rs.title] = rs;
    } else if (typeof value == 'object') {
      __toDefinition(value);
    }
  }
}

/**
 * Read reference content, create definition, and store the definition into main schema definitions
 * @param map
 */
export async function toDefinitions(
  map: Map<string, JSONSchema>
): Promise<void> {
  const definitions: Record<string, JSONSchema> = {};

  const schemas = map.values();

  throw new Error('Not implemented');
}
