/**
 * is empty object?
 * @param value
 * @returns
 */
export function eobj(value: object): boolean {
  return Object.keys(value).length === 0;
}
