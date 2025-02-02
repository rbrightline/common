import { tarr } from './tarr';

describe('tarr', () => {
  it('tarr(value) should return true when value is array', () => {
    expect(tarr([false])).toEqual(true);
    expect(tarr([1])).toEqual(true);
    expect(tarr([])).toEqual(true);
    expect(tarr(1)).toEqual(false);
    expect(tarr('some')).toEqual(false);
    expect(tarr('some')).toEqual(false);
  });
});
