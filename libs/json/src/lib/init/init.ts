import { cp } from '@rline/fs';
import { join } from 'path';

export const SCHEMA_CONFIG_FILE_NAME = 'schema.config.json';

/**
 * Generate the configuration file
 */
export async function init(root: string, configFileSource: string) {
  await cp(configFileSource, join(root, SCHEMA_CONFIG_FILE_NAME));
}
