/**
 * This array type does not have any item
 */
export type EmptyArray = [];

/**
 * is empty array?
 * @param value
 * @returns
 */
export function earr(value?: unknown): value is [] {
  if ((value as [])?.length) return (value as []).length == 0;
  return false;
}
