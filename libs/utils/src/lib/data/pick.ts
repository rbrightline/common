import { Key, ObjectLiteral } from '@rline/type';

/**
 * Pick a list of keys from an object
 * @param object
 * @param keys
 * @returns
 */
export function pick<T extends ObjectLiteral, K extends Key<T> & string>(
  object: T,
  keys: K[]
): Pick<T, K> {
  const pickedObject: Pick<T, K> = {} as T;
  for (const key of keys) {
    (pickedObject as T)[key] = object[key];
  }

  return pickedObject;
}
