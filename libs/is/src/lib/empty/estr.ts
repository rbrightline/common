import { def } from '../val';

/**
 * is empty string?
 * @param value
 * @returns
 */
export function estr(value: string): boolean {
  if (def(value)) {
    const exp = /^\s{0,}$/;
    return exp.test(value);
  }
  return false;
}
