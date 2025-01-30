import { asyncFilter } from '@rline/utils';
import { join } from 'path';
import { __readdir } from './__fs__';
import { isDirectory } from './stat';

/**
 *
 * List the absolute path of the directories ( optionly files ) under the root directory
 *
 * @param root Relative or absolute directory path
 *
 * ````typescript
 *    './directory'
 *    '/directory/directory'
 * ````
 *
 * @param includeFiles When set true, output includes files as well
 *
 * @returns
 *
 * ````markdown
 *    |- root
 *       |- dir1
 *       |- dir2
 *       |- dir3
 * ````
 *
 * ````typescript
 *
 *     await dirs('./root'); // output: ['/....../dir1', '/......./dir2', '/...../dir3']
 *
 * ````
 *
 */
export async function dirs(
  root: string,
  includeFiles = false
): Promise<string[]> {
  return new Promise((res, rej) => {
    try {
      __readdir(root, async (err, data) => {
        if (err) {
          res([]);
        } else {
          if (includeFiles == true) {
            res(data);
          } else {
            const dirs = await asyncFilter(data, (e) =>
              isDirectory(join(root, e))
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
