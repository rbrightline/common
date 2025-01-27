import { ObjectLiteral } from '@rline/type';

/**
 * Make array unique
 * @param items
 * @returns
 */
export function unique<T>(items: T[]): T[] {
  return [...new Set(items)];
}

/**
 * Make object-array unique by
 * @param items
 * @param by
 * @returns
 */
export function uniqueBy<T extends ObjectLiteral, K extends string & keyof T>(
  items: T[],
  by: K
): T[] {
  const map = new Map<T[K], T>();

  items.forEach((e) => {
    if (!map.has(e[by])) map.set(e[by], e);
  });

  return [...map.values()];
}
