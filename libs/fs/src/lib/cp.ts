import { NotFileError } from '@rline/type';
import { oshit } from '@rline/utils';
import { copyFile } from 'fs';
import { join } from 'path';
import { mkdir } from './mkdir';
import { isFile } from './stat';

/**
 * Copy file from target to destination
 * @param source source file path
 * @param target target file path
 *
 * @returns
 *
 * ````typescript
 *    await cp('./file.md', './new-file.md');
 *    await cp('./file.md', '../other/new-file.md');
 *    await cp('./other/file.md', '../some/new-file.md');
 * ````
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
