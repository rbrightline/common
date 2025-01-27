import { SchemaType } from '@rline/type';
import { readFileSync } from 'fs';
import { SCHEMA_CONFIG_FILE_NAME } from '../init/init';

export function getConfig(): SchemaConfig {
  return JSON.parse(
    readFileSync(`./${SCHEMA_CONFIG_FILE_NAME}`).toString()
  ) as SchemaConfig;
}
