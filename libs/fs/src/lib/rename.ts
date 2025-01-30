import {
  suffixFileName as __suffixFileName,
  getLastSegment,
  setLastSegment,
} from '@rline/utils';
import { __rename } from './__fs__';

/**
 * Rename filename
 * @param filepath Relative or absolute filepath
 *
 * @param newFilename new filename
 *
 * @returns
 *
 * ````typescript
 *    await rename('./file.md', 'new-file-name.md');
 * ````
 */
export async function rename(
  filepath: string,
  newFilename: string
): Promise<void> {
  return new Promise((res, rej) => {
    const newFilepath = setLastSegment(filepath, newFilename);
    try {
      __rename(filepath, newFilepath, (err) => {
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

export function suffixFileName(
  filePath: string,
  suffix: string
): Promise<void> {
  const lastSegment = getLastSegment(filePath);
  const newFileName = __suffixFileName(lastSegment, suffix);

  return rename(filePath, newFileName);
}

export function prefixFileName(
  filePath: string,
  prefix: string
): Promise<void> {
  const lastSegment = getLastSegment(filePath);
  const newFileName = prefix + lastSegment;
  return rename(filePath, newFileName);
}
