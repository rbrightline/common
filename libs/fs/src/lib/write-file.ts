import { ValueType } from '@rline/type';
import { writeFile as __writeFile, mkdirSync } from 'fs';
import { join } from 'path';

/**
 * Read file async
 * @param filepath
 * @returns
 */
export async function writeFile<T extends ValueType>(
  filepath: string,
  content: T
): Promise<void> {
  return new Promise((res, rej) => {
    try {
      /**
       * - [ ] create async function for this
       */
      mkdirSync(join(filepath, '..'), { recursive: true });

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
