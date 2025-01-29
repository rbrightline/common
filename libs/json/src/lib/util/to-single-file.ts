import { JSONSchema, KeyNotFoundError } from '@rline/type';
import { join } from 'path';
import { toAbsolutePaths } from './to-absolute-paths';
import { toSchemaMap } from './to-schema-map';

export async function toSingleFile(
  root = '',
  mainFileName: string
): Promise<JSONSchema> {
  const map = await toSchemaMap(root);

  toAbsolutePaths(map);

  const mainSchema = map.get(join(root, mainFileName));

  if (!mainSchema) throw new KeyNotFoundError();

  console.log(mainSchema);
  console.log(map);

  return mainSchema;
}
