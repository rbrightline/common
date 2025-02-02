import { tnbr } from './tnbr';

describe('tnbr', () => {
  it('tnbr(value) should return true if the value is number', () => {
    expect(tnbr(1)).toEqual(true);
    expect(tnbr(-1)).toEqual(true);
    expect(tnbr(NaN)).toEqual(true);
    expect(tnbr(0)).toEqual(true);
    expect(tnbr('')).toEqual(false);
    expect(tnbr('0')).toEqual(false);
    expect(tnbr('-1')).toEqual(false);
    expect(tnbr('100')).toEqual(false);
    expect(tnbr(true)).toEqual(false);
    expect(tnbr(false)).toEqual(false);
    expect(tnbr(null)).toEqual(false);
    expect(tnbr(undefined)).toEqual(false);
    expect(tnbr({})).toEqual(false);
    expect(tnbr({})).toEqual(false);
    expect(tnbr([{}])).toEqual(false);
  });
});
