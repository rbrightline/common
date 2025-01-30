import { ToString } from '@rline/type';
import { writeFile as __writeFile } from 'fs';
import { join } from 'path';
import { mkdir } from './mkdir';

/**
 * Read file async
 * @param filepath
 * @returns
 */
export async function writeFile<T extends ToString>(
  filepath: string,
  content: T
): Promise<void> {
  await mkdir(join(filepath, '..'));
  return await new Promise((res, rej) => {
    try {
      __writeFile(filepath, content.toString(), (err) => {
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
