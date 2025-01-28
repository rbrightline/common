import { readPackageJSONFile } from '@rline/utils';
import { foreachLibrary, lib } from '../common/library';
import { join } from 'path';
/**
 * Print the version of the library
 * @param library
 */
export async function version(library: string): Promise<void> {
  const __library = lib(library);

  const { name, version } = await readPackageJSONFile(
    join(__library, 'package.json')
  );

  console.table({ name, version });
}

/**
 * print all versions
 */
export async function versions() {
  await foreachLibrary(version);
}
