import { ObjectLiteral } from '@rline/type';
import { writeFile } from './write-file';
/**
 * Write json file (using JSON.stringify)
 *
 * @param filePath Relative or absolute filepath
 *
 * @param content contnet object
 *
 * @returns
 *
 *
 */
export async function writeJSONFile<T extends ObjectLiteral>(
  filePath: string,
  content: T
): Promise<void> {
  return await writeFile(filePath, JSON.stringify(content));
}
