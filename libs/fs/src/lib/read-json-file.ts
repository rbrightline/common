import { ObjectLiteral } from '@rline/type';
import { readFile } from './read-file';

/**
 * Read json file
 * @param filePath Relative or absolute filepath
 * @returns T {@link ObjectLiteral}
 *
 */
export async function readJSONFile<T extends ObjectLiteral>(
  filePath: string
): Promise<T | never> {
  const content = await readFile(filePath);
  return JSON.parse(content);
}
