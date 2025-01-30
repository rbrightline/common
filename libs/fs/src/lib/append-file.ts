import { ToString } from '@rline/type';
import { __appendFile } from './__fs__';

export async function appendFile<T extends ToString>(
  filepath: string,
  content: T
): Promise<void> {
  return new Promise<void>((res, rej) => {
    try {
      __appendFile(filepath, content.toString(), (err) => {
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
