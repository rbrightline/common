import { Key, ObjectLiteral, PickRequired } from '@rline/type';
import { isDefined } from './is-undefined';

/**
 * Check the object has a key with defined value
 * @param value
 * @param keys
 * @returns
 */
export function hasKeys<T extends ObjectLiteral, K extends Key<T>>(
  value: T,
  keys: K[]
): value is PickRequired<T, K> {
  return keys.every((e) => isDefined(e));
}
