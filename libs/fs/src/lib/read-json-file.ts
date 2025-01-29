import { ObjectLiteral } from '@rline/type';
import { readFile } from './read-file';

/**
 * Read and transform json file
 * @param filePath
 * @returns object
 */
export async function readJSONFile<T extends ObjectLiteral>(
  filePath: string
): Promise<T> {
  const content = await readFile(filePath);
  return JSON.parse(content);
}
