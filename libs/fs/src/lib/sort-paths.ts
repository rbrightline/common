import { segments } from '@rline/utils';

/**
 * Sort paths by segment count
 * @param paths
 * @returns
 */
export function sortPaths(paths: string[]) {
  return paths.sort((a, b) =>
    segments(a).length > segments(b).length ? -1 : 1
  );
}
