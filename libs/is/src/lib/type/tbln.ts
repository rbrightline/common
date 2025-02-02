/**
 * is typeof boolean
 * @param value
 * @returns
 */
export function tbln(value: unknown): value is boolean {
  return typeof value === 'boolean';
}
