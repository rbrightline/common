import { Obj } from '../type';
import { def } from '../val/def';
import { eobj } from './eobj';

/**
 * is not empty object?
 * @param value
 * @returns
 */
export function neobj(value: Obj): boolean {
  if (def(value)) return !eobj(value);
  return false;
}
