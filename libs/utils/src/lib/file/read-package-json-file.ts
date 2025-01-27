import { PackageJSON } from '@rline/type';
import { readJSONFile } from './read-json-file';

/**
 * Read and transform json file
 * @param filePath
 * @returns
 */
export function readPackageJSONFile(filePath: string) {
  return readJSONFile<PackageJSON>(filePath);
}
