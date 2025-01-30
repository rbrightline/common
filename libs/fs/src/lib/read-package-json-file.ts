import { PackageJSON } from '@rline/type';
import { readJSONFile } from './read-json-file';

/**
 * This function only adds the type {@link PackageJSON} to the response, for more information, have a look at {@link readJSONFile} function
 *
 * @param packageJsonFilePath
 *
 * @returns content {@link PackageJSON}
 *
 */
export function readPackageJSONFile(
  packageJsonFilePath: string
): Promise<PackageJSON> {
  return readJSONFile<PackageJSON>(packageJsonFilePath);
}
