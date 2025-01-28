import { readJSONFile } from '@rline/fs';
import { SchemaConfig } from '@rline/type';
import { SCHEMA_CONFIG_FILE_NAME } from '../init/init';

export async function getConfig(): Promise<SchemaConfig> {
  const content = await readJSONFile<SchemaConfig>(
    `./${SCHEMA_CONFIG_FILE_NAME}`
  );
  return content;
}
