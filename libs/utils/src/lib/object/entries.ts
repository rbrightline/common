import { Pair } from '@rline/type';

/**
 *
 * @param obj object value
 * @param all if true, all entries are returned else (default) only return the entiries with defined values
 * @returns
 */
export function entries<T extends object, K extends keyof T>(
  obj: T,
  all = false
): [K, T[K]][] {
  const __entries = Object.entries(obj);

  if (all) return __entries as Pair<K, T[K]>[];

  return __entries.filter(([, value]) => value != undefined) as Pair<K, T[K]>[];
}
