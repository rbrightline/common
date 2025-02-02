import { Obj } from '../type';
import { eobj } from './eobj';

/**
 * is not empty object?
 * @param value
 * @returns
 */
export function neobj(value: Obj): boolean {
  return !eobj(value);
}
