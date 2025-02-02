import { nil } from './nil';

/**
 * is not null?
 * @param value
 * @returns
 */
export function nnil(value: unknown): boolean {
  return !nil(value);
}
