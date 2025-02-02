import { nearr } from './nearr';

describe('nearr', () => {
  it('nearr(value) should return true if the value is not empty', () => {
    expect(nearr([])).toEqual(false);

    expect(nearr([null])).toEqual(false);

    expect(nearr([undefined, undefined, null, undefined, NaN])).toEqual(false);

    expect(nearr([1])).toEqual(true);

    expect(nearr([null, undefined, 1, null, undefined])).toEqual(true);
  });
});
