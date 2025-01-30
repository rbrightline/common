import { join } from 'path';
import { dirs } from './dirs';
import { isDirectory } from './stat';

export type ForEachDirectoryOptions = {
  /**
   * Visit all directories including the deepest ones
   */
  recursive?: boolean;
};

/**
 * @param dirpath absolute
 */
export type ForEachDirectoryCallBack = (dirpath: string) => Promise<void>;

export async function ____forEachDirectory(
  root: string,
  callback: ForEachDirectoryCallBack,
  options?: ForEachDirectoryOptions,
  isSubDirectory = false
) {
  const each = await dirs(root);

  if (each.length > 0) {
    for (const dir of each) {
      if (options?.recursive) {
        const subdirectory = join(root, dir);
        if (await isDirectory(subdirectory)) {
          const newRoot = join(root, dir);
          await ____forEachDirectory(newRoot, callback, options, true);
        }
      } else {
        callback(join(root, dir));
      }
    }
  } else if (isSubDirectory == true) {
    callback(root);
  }
}

/**
 * Go through for each directory under the root directory including the deepest directories
 * @param root absolute path recommended for bug prevention
 * @param callback callback {@link ForEachDirectoryCallBack}
 */
export async function forEachDirectory(
  root: string,
  callback: ForEachDirectoryCallBack,
  options?: ForEachDirectoryOptions
) {
  return await ____forEachDirectory(root, callback, options);
}
