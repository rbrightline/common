/**
 * is typeof number and not NaN?
 * @param value
 * @returns
 */
export function tnbr(value: unknown): value is number {
  return typeof value === 'number';
}
