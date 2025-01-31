import { NotFileError } from '@rline/type';
import { oshit } from '@rline/utils';
import { copyFile } from 'fs';
import { join } from 'path';
import { mkdir } from './mkdir';
import { isFile } from './stat';

/**
 * copy file from target to destination
 * @param filepath
 */
export async function cp(source: string, target: string): Promise<void> {
  if (await isFile(source)) {
    await mkdir(join(target, '..'));
    return new Promise((res, rej) => {
      try {
        copyFile(source, target, (err) => {
          if (err) {
            rej(err);
          } else {
            res();
          }
        });
      } catch (caught) {
        rej(caught);
      }
    });
  }

  oshit(NotFileError);
}
