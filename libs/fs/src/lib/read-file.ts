import { __readFile } from './__fs__';

/**
 * Read file async
 * @param filepath
 * @returns
 */
export async function readFile(filepath: string): Promise<string | never> {
  return new Promise((res, rej) => {
    try {
      __readFile(filepath, 'utf-8', (err, data) => {
        if (err) {
          rej(err);
        } else {
          res(data.toString());
        }
      });
    } catch (err) {
      rej(err);
    }
  });
}
