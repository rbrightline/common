import { readdir as __readdir } from 'fs';
import { isDirectory } from './stat';
import { join } from 'path';
import { asyncFilter } from '../array';

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
