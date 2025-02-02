/**
 * is empty string?
 * @param value
 * @returns
 */
export function estr(value: string): boolean {
  const exp = /^\s{0,}$/;
  return exp.test(value);
}
