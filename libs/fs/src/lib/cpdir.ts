import { join } from 'path';
import { cp } from './cp';
import { forEachFile } from './for-each-file';
import { mkdir } from './mkdir';

/**
 * Copy directory
 * @param source
 * @param target
 * @returns
 */
export async function cpdir(source: string, target: string): Promise<void> {
  await mkdir(target);
  await forEachFile(
    source,
    async (filepath: string) => {
      const targetfilepath = filepath.replace(source, target);
      await mkdir(join(filepath, '..'));
      await cp(filepath, targetfilepath);
    },
    { recursive: true }
  );
  //   return new Promise((res, rej) => {
  //     try {
  //       cp(source, target, (err) => {
  //         if (err) {
  //           rej(err);
  //         } else {
  //           res();
  //         }
  //       });
  //     } catch (err) {
  //       rej(err);
  //     }
  //   });
}
