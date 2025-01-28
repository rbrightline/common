import { asyncFilter, dirs, isDirectory } from '@rline/utils';
import { APPSDIR } from './constants';
import { join } from 'path';

/**
 * Get the list of app names
 * @returns
 */
export async function apps() {
  const __dirs = await dirs(APPSDIR);
  return await asyncFilter(__dirs, (v) => isDirectory(join(APPSDIR, v)));
}
