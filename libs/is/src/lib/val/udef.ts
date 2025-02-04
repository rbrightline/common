import { nil } from './nil';

/**
 * is undefiend?
 * @return boolean
 */
export function udef(value: unknown): value is undefined | null {
  if (typeof value == 'number') return isNaN(value);

  return value === undefined || nil(value);
}
