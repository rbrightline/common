import { JSONSchema } from '@rline/type';
import { join } from 'path';

/**
 * Convert relative $ref values into absolute paths
 * @param root
 * @param schema
 */
export function __toAbsolutePaths(root: string, schema: JSONSchema): void {
  const entries = Object.entries(schema);

  if (entries.length > 0)
    for (const [key, value] of entries) {
      if (key == '$ref' && schema.$ref && !schema.$ref.startsWith('#/')) {
        schema.$ref = join(root, schema.$ref);
      } else if (typeof value == 'object') {
        __toAbsolutePaths(root, value);
      }
    }
}

/**
 * Convert relative $ref values into absolute paths
 * @param root
 * @param schema
 */
export function toAbsolutePaths(map: Map<string, JSONSchema>): void {
  const list = map.entries();

  for (const [key, value] of list) {
    __toAbsolutePaths(join(key, '..'), value);
  }
}
