import { readJSONFile } from '@rline/fs';
import { join } from 'path';
import { SchemaManagerOptions } from './schema-manager';

export async function schemaConfig(
  root: string
): Promise<SchemaManagerOptions> {
  return await readJSONFile<SchemaManagerOptions>(
    join(root, 'schema.config.json')
  );
}
