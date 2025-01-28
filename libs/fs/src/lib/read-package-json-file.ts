import { PackageJSON } from '@rline/type';
import { readJSONFile } from './read-json-file';

/**
 * Read and transform package.json file
 * @param packageJsonFilePath
 * @returns
 */
export function readPackageJSONFile(
  packageJsonFilePath: string
): Promise<PackageJSON> {
  return readJSONFile<PackageJSON>(packageJsonFilePath);
}
