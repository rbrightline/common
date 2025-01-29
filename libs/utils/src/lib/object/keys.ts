import { Keys } from '@rline/type';

/**
 *
 * @param obj object value
 * @param all if set true, return all keys, else (default) return keys that have defined value
 * @returns
 */
export function keys<T extends object>(obj: T, all = false): Keys<T> {
  const allKeys = Object.keys(obj);
  if (all) {
    return allKeys as Keys<T>;
  }
  return allKeys.filter((e) => obj[e as keyof T] != undefined) as Keys<T>;
}
