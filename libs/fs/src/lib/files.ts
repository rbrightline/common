import { asyncFilter } from '@rline/utils';
import { readdir as __readdir } from 'fs';
import { join } from 'path';
import { isFile } from './stat';

/**
 * Get the list of files under the directory
 * @param directory
 * @param includeDirs if true, include the directories
 * @returns
 */
export async function files(
  directory: string,
  includeDirs = false
): Promise<string[]> {
  return new Promise((res, rej) => {
    try {
      __readdir(directory, async (err, allFiles) => {
        if (err) {
          res([]);
        } else {
          if (includeDirs == true) {
            res(allFiles);
          } else {
            const dirs = await asyncFilter(allFiles, (e) =>
              isFile(join(directory, e))
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
