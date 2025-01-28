import { ValueType } from '@rline/type';
import { writeFile as __writeFile } from 'fs';

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
