import { readJSONFile } from '@rline/fs';
import { SchemaConfig } from '@rline/type';
import { join } from 'path';

export async function schemaConfig(root: string): Promise<SchemaConfig> {
  return await readJSONFile<SchemaConfig>(join(root, 'schema.config.json'));
}
