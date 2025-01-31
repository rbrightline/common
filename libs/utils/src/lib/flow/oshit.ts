import { Type } from '@rline/type';

/**
 * Throw error ( throw new Type<E>(message) )
 * @param error optional error class to throw such as FileNotFoundError
 * @param message optional error message
 */
export function oshit<T>(error?: Type<T>, message?: string): never {
  if (error) {
    throw new error(message);
  } else {
    throw new Error(message);
  }
}
