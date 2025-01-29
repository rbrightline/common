import { copyFileSync } from 'fs';
import { join } from 'path';

export const SCHEMA_CONFIG_FILE_NAME = 'schema.config.json';

export function init() {
  const root = '';
  copyFileSync(
    join(__dirname, `../../../assets/${SCHEMA_CONFIG_FILE_NAME}`),
    join(root, SCHEMA_CONFIG_FILE_NAME)
  );
}
