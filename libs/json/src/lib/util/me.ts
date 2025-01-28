import { readJSONFile } from '@rline/fs';
import { PackageJSON } from '@rline/type';

export async function me(): Promise<PackageJSON> {
  const result = await readJSONFile<PackageJSON>('./package.json');
  return result;
}
