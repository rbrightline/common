import { AccessDeniedError } from '@rline/type';
import { normalize, resolve } from 'path';

export type PathScope = (path: string) => string | never;

/**
 * Create a path resolver that restrict the access to the provided root directory only
 *
 * @param scopePath Relative or absolute directory path
 *
 * ````typescript
 *    './directory'
 *    '/directory/directory'
 * ````
 *
 * @returns
 *
 * In the example below, If the `filepath` is not under the secure directory,
 * `scope` throws {@link AccessDeniedError}
 *
 * ````typescript
 *
 *    const scope = createPathScope(join(__dirname,'secure'));
 *    const filepath = scope('../../../../secured-file.md);
 *
 * ````
 *
 */
export function createPathScope(scopePath: string) {
  return (...paths: string[]) => {
    const resolved = resolve(scopePath, ...paths);
    if (!resolved.startsWith(scopePath)) throw new AccessDeniedError();
    return normalize(resolved);
  };
}
