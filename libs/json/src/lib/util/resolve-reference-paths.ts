import { JSONSchema } from '@rline/type';
import { join } from 'path';

export function __resolveReferencePaths(
  root: string,
  schema: JSONSchema
): void {
  const entries = Object.entries(schema);

  if (entries.length > 0)
    for (const [key, value] of entries) {
      if (key == '$ref' && schema.$ref && !schema.$ref.startsWith('#/')) {
        schema.$ref = join(root, schema.$ref);
      } else if (typeof value == 'object') {
        __resolveReferencePaths(root, value);
      }
    }
}

export function resolveReferencePaths(map: Map<string, JSONSchema>): void {
  const list = map.entries();

  for (const [key, value] of list) {
    __resolveReferencePaths(join(key, '..'), value);
  }
}
