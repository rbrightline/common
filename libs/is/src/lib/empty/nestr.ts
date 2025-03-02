import { def } from '../val';
import { estr } from './estr';

/**
 * is not empty string
 * @param value
 * @returns
 */
export function nestr(value: string): boolean {
  if (def(value)) return !estr(value);
  return false;
}
