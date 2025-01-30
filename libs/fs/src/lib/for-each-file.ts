import { resolve } from 'path';
import { files } from './files';
import { isDirectory, isFile } from './stat';

/**
 * @param filepath absolute filepath
 */
export type ForEachFileCallBack = (filepath: string) => void | Promise<void>;

export type ForEachFileOptions = {
  recursive?: boolean;
};

/**
 * Go through for each filename under the root directory including the deepest files
 * @param root absolute path recommended for bug prevention
 * @param callback callback {@link ForEachFileCallBack}
 */
export async function forEachFile(
  root: string,
  callback: ForEachFileCallBack,
  options?: ForEachFileOptions
) {
  const each = await files(root, true);

  for (const dir of each) {
    const filePath = resolve(root, dir);
    if (await isFile(filePath)) {
      await callback(filePath);
    } else if (await isDirectory(filePath)) {
      if (options?.recursive === true) {
        const newRoot = resolve(root, dir);
        await forEachFile(newRoot, callback);
      }
    }
  }
}
