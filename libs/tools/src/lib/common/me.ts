import { PackageJSON } from '@rline/type';
import { readJSONFile } from '@rline/utils';
import { join } from 'path';
import { PACKAGE_JSON_FILE_NAME } from '../command/package-json';

export function me(): Promise<PackageJSON> {
  return readJSONFile(
    join(__dirname, '..', '..', '..', PACKAGE_JSON_FILE_NAME)
  );
}
