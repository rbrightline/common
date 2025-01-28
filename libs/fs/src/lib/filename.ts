import {
  suffixFileName as __suffixFileName,
  getLastSegment,
  setLastSegment,
} from '@rline/utils';
import { __rename } from './__fs__';

export async function rename(
  filePath: string,
  updatedName: string
): Promise<void> {
  return new Promise((res, rej) => {
    const newPath = setLastSegment(filePath, updatedName);
    try {
      __rename(filePath, newPath, (err) => {
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
