import { entries } from './entries';
import { keys } from './keys';

export type ForEachKeyCallBack<T, R extends Partial<T>> = (
  rootSchema: T,
  refSchema: R
) => void;
/**
 * @ignore
 * @param rootSchema
 * @param schema
 * @param key
 * @param callback
 */
export function __forEachKey<T extends object, R extends Partial<T>>(
  rootSchema: T,
  schema: T,
  key: keyof R,
  callback: ForEachKeyCallBack<T, R>
): void {
  if (keys(schema).length == 0) return;

  const pairs = entries(schema);

  for (const [_key, value] of pairs) {
    if (key == _key) {
      callback(rootSchema, schema as unknown as R);
    } else if (typeof value == 'object') {
      __forEachKey(rootSchema, value, key, callback);
    }
  }
}

/**
 * Find all occurance of the `key` and run the callback function
 * @param object
 * @param callback
 */
export function forEachKey<T extends object, R extends Partial<T>>(
  object: T,
  key: keyof R,
  callback: ForEachKeyCallBack<T, R>
): void {
  __forEachKey<T, R>(object, object, key, callback);
}
