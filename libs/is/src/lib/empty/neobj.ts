import { Optional } from '../common';
import { eobj } from './eobj';

/**
 * is not empty object?
 * @param value
 * @returns
 */
export function neobj(value?: Optional<object>): boolean {
  return !eobj(value);
}
