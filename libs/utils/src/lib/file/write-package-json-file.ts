import { PackageJSON } from '@rline/type';
import { writeFile } from './write-file';

/**
 * Write package.json file
 * It does not have a distict difference from writeFiles
 */
export async function writePackageJSONFile(
  filePath: string,
  content: PackageJSON
): Promise<void> {
  return await writeFile(filePath, content);
}
