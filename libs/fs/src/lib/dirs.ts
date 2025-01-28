import { asyncFilter } from '@rline/utils';
import { join } from 'path';
import { __readdir } from './__fs__';
import { isDirectory } from './stat';

/**
 * Get the list of directories under the directory
 * @param directory
 * @param includeFiles if true, include the files
 * @returns
 */
export async function dirs(
  directory: string,
  includeFiles = false
): Promise<string[]> {
  return new Promise((res, rej) => {
    try {
      __readdir(directory, async (err, allFiles) => {
        if (err) {
          res([]);
        } else {
          if (includeFiles == true) {
            res(allFiles);
          } else {
            const dirs = await asyncFilter(allFiles, (e) =>
              isDirectory(join(directory, e))
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
