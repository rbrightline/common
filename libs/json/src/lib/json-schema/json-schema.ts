import { join } from 'path';
import {
  convertReferencesToDefinitions,
  mapSchemaFiles,
  moveAllDefinitionsToMainSchema,
  resolveReferences,
} from '../utils';
import { mkdirSync, writeFileSync } from 'fs';
/**
 * Compile multiple json schemas into a single json schema file
 * @param root relative root path
 * @param fileName relative file path
 * @param output relative output path
 */
export function jsonSchema(root: string, fileName: string, output: string) {
  const MAIN_FILE_PATH = join(root, fileName);
  const map = mapSchemaFiles(root);

  map.forEach((value, key) => {
    resolveReferences(key, value, value);
  });

  map.forEach((value, key) => {
    convertReferencesToDefinitions(map, key, value, value);
  });

  const mainSchema = map.get(MAIN_FILE_PATH);

  if (!mainSchema) throw new Error(MAIN_FILE_PATH + ' not found in map');

  moveAllDefinitionsToMainSchema(mainSchema, map);

  mkdirSync(join(output, '..'), { recursive: true });

  writeFileSync(output, JSON.stringify(mainSchema));
}
