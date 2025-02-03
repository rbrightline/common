import { readJSONFile } from '@rline/fs';
import { SchemaConfig } from '@rline/type';
import { join } from 'path';
/**
 * Get the content of schema configuration file `schema.config.json`
 * @param root
 * @returns
 */
export async function schemaConfig(root: string): Promise<SchemaConfig> {
  return await readJSONFile<SchemaConfig>(join(root, 'schema.config.json'));
}
