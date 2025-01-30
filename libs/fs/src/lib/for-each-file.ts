import { resolve } from 'path';
import { files } from './files';
import { isDirectory, isFile } from './stat';

/**
 *
 * @param filepath absolute filepath
 *
 */
export type ForEachFileCallBack = (filepath: string) => void | Promise<void>;

export type ForEachFileOptions = {
  /**
   * When true, the operation includes files under the sub directories as well
   */
  recursive?: boolean;
};

/**
 * Go through for each file under the `root` file,
 * and run the provided callback function with the absolute path of the each file
 *
 * @param root Absolute or relative directory path
 *
 * ````typescript
 *    './directory'
 *    './directory/directory'
 *    '/directory/directory'
 * ````
 *
 * @param callback callback function {@link ForEachFileCallBack}
 *
 * ````typescript
 *    (absoluteFilePath:string)=>{ console.log(absoluteFilePath)}
 * ````
 *
 * ````typescript
 *    async (absoluteFilePath:string)=>{ await (....)}
 * ````
 *
 * @param options options {@link ForEachFileOptions}
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
 *    forEachFile('./directory', (absoluteFilePath:string)=>{
 *        // do for each absolute file path under the directory
 *    })
 * ````
 *
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
