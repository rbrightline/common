import { join } from 'path';
import { files } from './files';
import { isDirectory, isFile } from './stat';

/**
 * @param filepath absolute filepath
 */
export type ForEachFileCallBack = (filepath: string) => Promise<void>;
/**
 * Go through for each filename under the root directory including the deepest files
 * @param root absolute path recommended for bug prevention
 * @param callback callback {@link ForEachFileCallBack}
 */
export async function forEachFile(root: string, callback: ForEachFileCallBack) {
  const directories = await files(root, true);

  for (const dir of directories) {
    const filePath = join(root, dir);
    if (await isFile(filePath)) {
      await callback(filePath);
    } else if (await isDirectory(filePath)) {
      const newRoot = join(root, dir);
      await forEachFile(newRoot, callback);
    }
  }
}
