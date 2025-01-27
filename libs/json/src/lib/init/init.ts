import { writeFileSync } from 'fs';
import { join } from 'path';

export const SCHEMA_CONFIG_FILE_NAME = 'schema.config.json';

export function init(root: string) {
  writeFileSync( join(root, SCHEMA_CONFIG_FILE_NAME), `{}`)
}
