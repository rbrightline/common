import { tbln } from './tbln';

describe('tbln', () => {
  it('tbln(value) should return true when value is boolean', () => {
    expect(tbln(true)).toEqual(true);
    expect(tbln(false)).toEqual(true);
    expect(tbln(NaN)).toEqual(false);
    expect(tbln(1)).toEqual(false);
    expect(tbln(-1)).toEqual(false);
    expect(tbln(0)).toEqual(false);
    expect(tbln('some')).toEqual(false);
    expect(tbln([])).toEqual(false);
    expect(tbln([1])).toEqual(false);
    expect(tbln([{}])).toEqual(false);
  });
});
