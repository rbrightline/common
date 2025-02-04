import { ne } from './ne';

describe('ne', () => {
  it('ne(value) should return true if the value is not empty', () => {
    expect(ne('')).toEqual(false);
    expect(ne(0)).toEqual(false);
    expect(ne({})).toEqual(false);
    expect(ne([])).toEqual(false);
    expect(ne([null])).toEqual(false);
    expect(ne([null, undefined])).toEqual(false);
    expect(ne([null, undefined, NaN])).toEqual(false);

    expect(ne([null, undefined, NaN, 1])).toEqual(true);
    expect(ne(1)).toEqual(true);
    expect(ne(true)).toEqual(true);
    expect(ne([1])).toEqual(true);
    expect(ne({ some: 'some' })).toEqual(true);
  });
});
