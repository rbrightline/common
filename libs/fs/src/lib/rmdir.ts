import { __rmdir } from './__fs__';
import { getAllFilesAndDirs } from './get-all-files-and-dirs';

export type RmdirOptions = {
  /**
   * When true, remove all nested directories
   */
  recursive?: boolean;
};

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
    return await new Promise((res, rej) => {
      try {
        __rmdir(root, (err) => {
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
}
