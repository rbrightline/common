import { __rm } from './__fs__';

/**
 * Remove file
 *
 * @param filepath Relative or absolute filepath
 *
 * @returns
 * ````typescript
 *    await rm('./filename.md');
 * ````
 */
export function rm(filepath: string): Promise<void> {
  return new Promise((res, rej) => {
    try {
      __rm(filepath, (err) => {
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
