import { readFile } from 'fs';

/**
 * Read and transform json file
 * @param filePath
 * @returns object
 */
export async function readJSONFile<T>(filePath: string): Promise<T> {
  return new Promise<T>((res, rej) => {
    readFile(filePath, (err, data) => {
      if (err) {
        rej(err);
      } else {
        res(JSON.parse(data.toString()));
      }
    });
  });
}
