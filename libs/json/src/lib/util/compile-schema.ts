import { join } from 'path';
import { mapSchemaFiles } from './map-schema-files';
import { resolveReferencePaths } from './resolve-reference-paths';

export async function compileSchema(
  root = '',
  mainFileName: string
): Promise<void> {
  const map = await mapSchemaFiles(root);

  resolveReferencePaths(map);

  const mainSchema = map.get(join(root, mainFileName));
  console.log(mainSchema);

  console.log(map);
}
