import { existsSync, statSync } from 'fs';
import { LIBRARYDIR } from './constants';
import { join } from 'path';
import { asyncFilter, dirs } from '@rline/utils';

/**
 * Library path
 * @param library library name
 * @returns librarypath
 */
export function lib(library: string): string {
  return join(LIBRARYDIR, library);
}
/**
 * Get library names
 * @returns
 */
export async function libs(): Promise<string[]> {
  const __dirs = await dirs(LIBRARYDIR);

  return await asyncFilter(__dirs, async (value) => {
    const isDirectory = statSync(join(LIBRARYDIR, value)).isDirectory();
    const hasPackageJSON = existsSync(join(LIBRARYDIR, value, 'package.json'));
    const hasTsConfig = existsSync(join(LIBRARYDIR, value, 'tsconfig.json'));
    return isDirectory && hasPackageJSON && hasTsConfig;
  });
}
/**
 * Do operation for each library name
 * @param callback
 */
export async function foreachLibrary(
  callback: (library: string) => void
): Promise<void> {
  const _libs = await libs();
  _libs.forEach(callback);
}
