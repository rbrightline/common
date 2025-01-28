import { Optional, Pair } from '@rline/type';
import { max } from '../number';

export function zip<F, S>(
  first: F[],
  second: S[]
): [Optional<F>, Optional<S>][] {
  const result: Pair<Optional<F>, Optional<S>>[] = [];
  const length = max(first.length, second.length);
  for (let i = 0; i < length; i++) {
    const pair: Pair<Optional<F>, Optional<S>> = [undefined, undefined];
    try {
      pair[0] = first[i];
    } catch {
      //
    }

    try {
      pair[1] = second[i];
    } catch {
      //
    }

    result.push(pair);
  }
  return result;
}
