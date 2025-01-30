import { resolve } from 'path';
import { forEachJSONFile } from './for-each-json-file';

export async function forEachJSONSchemaFile(
  root: string,
  callback: (filepath: string) => Promise<void>
): Promise<void> {
  return await forEachJSONFile(root, async (filepath: string) => {
    filepath = resolve(root, filepath);
    if (filepath.endsWith('.schema.json')) await callback(filepath);
  });
}
