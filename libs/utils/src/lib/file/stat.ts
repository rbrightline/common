import { stat as __stat, Stats } from 'fs';

export function stat(filename: string): Promise<Stats> {
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
 * Check the path points at a directory
 * @param filepath
 * @returns
 */
export async function isDirectory(filepath: string): Promise<boolean> {
  const s = await stat(filepath);

  console.log(s, s.isDirectory());
  return s.isDirectory();
}

/**
 * Check the file points at a file
 * @param filepath
 * @returns
 */
export async function isFile(filepath: string): Promise<boolean> {
  const s = await stat(filepath);
  return s.isFile();
}
