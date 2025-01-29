import { PackageJSON } from '@rline/type';
import { writeJSONFile } from './write-json-file';

/**
 * Write package.json file
 * It does not have a distict difference from writeFiles
 */
export async function writePackageJSONFile(
  filePath: string,
  content: PackageJSON
): Promise<void> {
  return await writeJSONFile(filePath, content);
}
