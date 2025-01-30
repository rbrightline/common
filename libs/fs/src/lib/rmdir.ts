import { __rmdir } from './__fs__';
import { getAllFilesAndDirs } from './get-all-files-and-dirs';

export type RmdirOptions = {
  /**
   * When true, remove all nested directories
   */
  recursive?: boolean;
};

/**
 * @ignore
 */
export async function ____rmdir(directory: string): Promise<void> {
  return new Promise((res, rej) => {
    try {
      __rmdir(directory, (err) => {
        if (err) {
          rej(err);
        } else {
          res();
        }
      });
    } catch (err) {
      rej(err);
    }
  });
}

/**
 * Remove the directory
 * @param root
 * @param options options {@link RmdirOptions}
 * @returns
 *
 * ````typescript
 *    await rmdir('./root') //output: if root directory is not empty, throw error
 *    await rmdir('./root', { recursive: true}) //output: remove everything under the root directory
 * ````
 * - [ ] When set recursive true, it should remove everythin gunder the root directory
 */
export async function rmdir(
  root: string,
  options?: RmdirOptions
): Promise<void> {
  if (options?.recursive) {
    const all = await getAllFilesAndDirs(root);
    await Promise.all(all.map((e) => rmdir(e)));
  } else {
    await ____rmdir(root);
  }
}
