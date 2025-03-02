import { Key, PickOptional } from '@rline/type';
import { isUndefined } from './is-undefined';

/**
 * Check the object has a key with defined value
 * @param value
 * @param keys
 * @returns
 */
export function notHasKeys<T extends object, K extends Key<T>>(
  value: PickOptional<T, K>,
  keys: K[]
): value is PickOptional<T, K> {
  return keys.every((e) => isUndefined(e));
}
