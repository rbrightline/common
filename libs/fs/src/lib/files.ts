import { asyncFilter } from '@rline/utils';
import { readdir as __readdir } from 'fs';
import { join } from 'path';
import { isFile } from './stat';

/**
 *
 * List the absolute path of the files ( optionly directories ) under the root directory
 *
 * @param root Relative or absolute directory path
 *
 * ````typescript
 * './directory'
 * '/directory/directory'
 * ````
 *
 * @param includeDirs When set true, output includes directories as well
 *
 * @returns
 *
 * ````markdown
 * |- root
 *    |- dir1
 *      |- file1.md
 *      |- file2.md
 *    |- dir2
 *    |- dir3
 * ````
 *
 * ````typescript
 *    await files('./root'); // output: ['/....../dir1/file1.md', '/....../dir1/file2.md']
 *
 * ````
 *
 */
export async function files(
  root: string,
  includeDirs = false
): Promise<string[]> {
  return new Promise((res, rej) => {
    try {
      __readdir(root, async (err, __files) => {
        if (err) {
          rej(err);
        } else {
          if (includeDirs == true) {
            res(__files);
          } else {
            const dirs = await asyncFilter(
              __files,
              async (e) => !!(await isFile(join(root, e)))
            );
            res(dirs);
          }
        }
      });
    } catch (err) {
      rej(err);
    }
  });
}
