import { PackageJSON } from '@rline/type';
import { writeJSONFile } from './write-json-file';

/**
 * The function is not different from the {@link writeJSONFile} but the content must be {@link PackageJSON} type
 */
export async function writePackageJSONFile(
  filePath: string,
  content: PackageJSON
): Promise<void> {
  return await writeJSONFile(filePath, content);
}
