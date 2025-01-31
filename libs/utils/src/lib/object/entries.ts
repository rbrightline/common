import { EmptyObjectError, Pair } from '@rline/type';

/**
 * Get object's key-value pairs/entries (using Object.entries())
 * @param obj object value
 * @param all if true, all entries are returned else (default) only return the entiries with defined values
 * @throws when object is empty {@link EmptyObjectError} is thrown
 * @returns the key-value pairs of an object {@link Pair}
 */
export function entries<T extends object>(
  obj: T,
  all = false
): Pair<keyof T, any>[] | never {
  const __entries = Object.entries(obj);

  if (__entries.length > 0) {
    if (all) return __entries as Pair<keyof T, any>[];

    return __entries.filter(([, value]) => value != undefined) as Pair<
      keyof T,
      any
    >[];
  } else {
    throw new EmptyObjectError();
  }
}
