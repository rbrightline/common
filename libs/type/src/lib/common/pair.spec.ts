import { Digit } from '../num';
import { Alphabet } from '../string';
import { Pair } from './pair';

describe('pair', () => {
  it('should create pair type', () => {
    type A = Digit;
    type B = Alphabet;

    type AB = Pair<A, B>;

    const value: AB = [9, 'b'];
  });
});
