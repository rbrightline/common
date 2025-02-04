import { def } from '../val/def';

/**
 * is empty object?
 * @param value
 * @returns
 */
export function eobj(value: object): boolean {
  if (def(value)) return Object.keys(value).length === 0;

  return false;
}
