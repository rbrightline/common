import { __rmdir } from './__fs__';
import { forEachDirectory } from './for-each-directory';

export type RemoveDirectoryOptions = {
  recursive?: boolean;
};

export async function ____rmdir(directory: string): Promise<void> {
  return new Promise((res, rej) => {
    try {
      __rmdir(directory, (err) => {
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

/**
 * Remove directories directory
 * @param dirpath
 * @param options
 * @returns
 */
export async function rmdir(
  dirpath: string,
  options?: RemoveDirectoryOptions
): Promise<void> {
  if (options?.recursive) {
    return await forEachDirectory(dirpath, ____rmdir, {
      recursive: options?.recursive,
    });
  } else {
    await ____rmdir(dirpath);
  }
}
