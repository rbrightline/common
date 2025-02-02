import { earr } from './earr';

describe('earr', () => {
  it('eaarr should return return true if the array is empty', () => {
    expect(earr([])).toEqual(true);
    expect(earr([{}])).toEqual(true);
    expect(earr([null])).toEqual(true);
    expect(earr([undefined])).toEqual(true);
    expect(earr([NaN])).toEqual(true);

    expect(earr([NaN, 1])).toEqual(false);
    expect(earr([null, 1])).toEqual(false);
    expect(earr([1])).toEqual(false);
    expect(earr([true])).toEqual(false);
    expect(earr([false])).toEqual(false);
  });
});
