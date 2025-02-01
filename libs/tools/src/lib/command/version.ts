import { readJSONFile } from '@rline/fs';
import { join } from 'path';
import { foreachLibrary, lib } from '../common/library';
/**
 * Print the version of the library
 * @param library
 */
export async function version(library: string): Promise<void> {
  const __library = lib(library);

  const { name, version } = await readJSONFile(join(__library, 'package.json'));

  console.table({ name, version });
}

/**
 * print all versions
 */
export async function versions() {
  await foreachLibrary(version);
}
