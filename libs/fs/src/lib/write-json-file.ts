import { ObjectLiteral } from '@rline/type';
import { writeFile } from './write-file';

export async function writeJSONFile<T extends ObjectLiteral>(
  filePath: string,
  content: T
): Promise<void> {
  return await writeFile(filePath, JSON.stringify(content));
}
