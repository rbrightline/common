import { Key, PickRequired } from '@rline/type';
import { isDefined } from './is-undefined';

/**
 * Check the object has the defined keys, return true if the object has the key and value else false
 * @param value
 * @param keys
 * @returns
 */
export function hasKeys<T extends object, K extends Key<T>>(
  value: T,
  keys: K[]
): value is PickRequired<T, K> {
  return keys.every((e) => isDefined(e));
}
