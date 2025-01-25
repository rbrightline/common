import { readFileSync } from 'fs';
import { JSONSchema } from '../type';

export function readSchemaFile(filePath: string): JSONSchema {
  return JSON.parse(readFileSync(filePath).toString()) as JSONSchema;
}
