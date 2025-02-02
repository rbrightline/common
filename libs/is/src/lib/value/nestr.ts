import { estr } from './estr';

/**
 * is not empty string
 * @param value
 * @returns
 */
export function nestr(value: string): boolean {
  return !estr(value);
}
