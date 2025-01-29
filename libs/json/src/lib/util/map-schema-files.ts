import { forEachJSONSchemaFile, readJSONFile } from '@rline/fs';
import { JSONSchema } from '@rline/type';
import { join } from 'path';

/**
 * map each schema under the root directory
 */
export async function mapSchemaFiles(
  root: string
): Promise<Map<string, JSONSchema>> {
  const map = new Map<string, JSONSchema>();
  await forEachJSONSchemaFile(root, async (filepath: string) => {
    const schema = await readJSONFile<JSONSchema>(filepath);

    schema.$filepath = filepath;
    (schema as any).$dirpath = join(filepath, '..');
    map.set(filepath, schema);
  });

  return map;
}
