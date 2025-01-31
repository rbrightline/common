import { __stat, Stats } from './__fs__';

export async function stat(filename: string): Promise<Stats> {
  return new Promise((res, rej) => {
    __stat(filename, (err, stats) => {
      if (err) {
        rej(err);
      } else {
        res(stats);
      }
    });
  });
}

/**
 * Check the path is a directory
 * @param filepath
 * @returns
 */
export async function isDirectory(filepath: string): Promise<boolean | null> {
  try {
    const s = await stat(filepath);
    return s.isDirectory();
  } catch (err) {
    return null;
  }
}

/**
 * Check the path is a file
 * @param filepath
 * @returns
 */
export async function isFile(filepath: string): Promise<boolean | null> {
  try {
    const s = await stat(filepath);
    return s.isFile();
  } catch (err) {
    return null;
  }
}
