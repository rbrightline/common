import { AccessDeniedError } from '@rline/type';
import { resolve } from 'path';

export type PathScope = (path: string) => string | never;

/**
 * Create a path resolver that restrict the access to the provided root directory only
 * @param scopePath
 * @returns
 */
export function createPathScope(scopePath: string) {
  return (...paths: string[]) => {
    const resolved = resolve(scopePath, ...paths);
    if (!resolved.startsWith(scopePath)) throw new AccessDeniedError();
    return resolved;
  };
}
