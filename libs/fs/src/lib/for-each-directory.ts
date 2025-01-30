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
 * Callback function type for {@link forEachDirectory} function
 *
 * @param absoluteDirectory ##Absolute## directory path
 */
export type ForEachDirectoryCallBack = (
  absoluteDirectory: string
) => Promise<void>;

/**
 * @ignore
 */
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
 * Go through for each directory under the `root` directory,
 * and run the provided callback function with the absolute path of the each sub directory
 *
 * @param root Absolute or relative directory path
 *
 * ````typescript
 *    './directory'
 *    './directory/directory'
 *    '//directory/directory'
 * ````
 *
 * @param callback callback function {@link ForEachDirectoryCallBack}
 *
 * ````typescript
 *    (absolutePath:string)=>{ console.log(absolutePath)}
 * ````
 *
 * ````typescript
 *    async (absolutePath:string)=>{ await (....)}
 * ````
 *
 * @param options options {@link ForEachDirectoryOptions}
 *
 * ````typescript
 *    {
 *        recursive: true
 *    }
 * ````
 *
 * @returns
 *
 * ````typescript
 *    forEachDirectory('./directory', (absolutePath:string)=>{
 *        // do for each absolute paths under the directory
 *    })
 * ````
 *
 */
export async function forEachDirectory(
  root: string,
  callback: ForEachDirectoryCallBack,
  options?: ForEachDirectoryOptions
) {
  return await ____forEachDirectory(root, callback, options);
}
