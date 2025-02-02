/**
 * is typeof string?
 * @param value
 * @returns
 */
export function tstr(value: unknown): value is string {
  return typeof value == 'string';
}
