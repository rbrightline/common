import { readJSONFile } from '@rline/fs';
import { PackageJSON } from '@rline/type';
import { join } from 'path';

export function me(): Promise<PackageJSON> {
  return readJSONFile(join(__dirname, '..', '..', '..', 'package.json'));
}
