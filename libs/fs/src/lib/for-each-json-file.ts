import { forEachFile } from './for-each-file';

export async function forEachJSONFile(
  root: string,
  callback: (filepath: string) => Promise<void>
): Promise<void> {
  return await forEachFile(root, async (filepath: string) => {
    if (filepath.endsWith('.json')) {
      await callback(filepath);
    }
  });
}

export async function forEachJSONSchemaFile(
  root: string,
  callback: (filepath: string) => Promise<void>
): Promise<void> {
  return await forEachFile(root, async (filepath: string) => {
    if (filepath.endsWith('.schema.json')) {
      await callback(filepath);
    }
  });
}
