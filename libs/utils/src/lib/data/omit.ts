import { Key, ObjectLiteral } from '@rline/type';

/**
 * Omit the keys from the object.
 * @param object
 * @param keys
 * @returns
 */
export function omit<T extends ObjectLiteral, K extends Key<T> & string>(
  object: T,
  keys: K[]
): Omit<T, K> {
  const omittedObject: ObjectLiteral = {};

  const entries = Object.entries(object);
  for (const [key, value] of entries) {
    if (keys.includes(key as K)) {
      continue;
    }
    omittedObject[key] = value;
  }

  return omittedObject as Omit<T, K>;
}
