import { EmptyValueError } from '../errors';
import { rval } from './rval';
import { ne } from './value';

/**
 * Required and Not empty value. If the value is not defined or empty string, object, or array, thow {@link EmptyValueError}
 * @param value T | undefined | null
 * @param defautlValue T
 * @returns
 */
export function sval<T>(
  value?: T | undefined | null,
  defautlValue?: T
): T | never {
  if (ne(value)) return rval(value, defautlValue);

  throw new EmptyValueError(value);
}
