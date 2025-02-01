import { dirs, isDirectory } from '@rline/fs';
import { asyncFilter } from '@rline/utils';
import { join } from 'path';
import { APPSDIR } from './constants';

/**
 * Get the list of app names
 * @returns
 */
export async function apps() {
  const __dirs = await dirs(APPSDIR);
  return await asyncFilter(
    __dirs,
    async (v) => !!(await isDirectory(join(APPSDIR, v)))
  );
}
