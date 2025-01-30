import { resolve } from 'path';
import { forEachJSONFile } from './for-each-json-file';

/**
 * The only difference from the {@link forEachFile} is that the function only operate for files with `.schema.json` extention
 * For more information, have a look at {@link forEachFile}
 */
export async function forEachJSONSchemaFile(
  root: string,
  callback: (filepath: string) => Promise<void>
): Promise<void> {
  return await forEachJSONFile(root, async (filepath: string) => {
    filepath = resolve(root, filepath);
    if (filepath.endsWith('.schema.json')) await callback(filepath);
  });
}
