import { tstr } from './tstr';

describe('tstr', () => {
  it('tstr(value) should return true when value is string', () => {
    expect(tstr('')).toEqual(true);
    expect(tstr('1')).toEqual(true);
    expect(tstr('-1')).toEqual(true);
    expect(tstr('some')).toEqual(true);
    expect(tstr(undefined)).toEqual(false);
    expect(tstr(null)).toEqual(false);
    expect(tstr(NaN)).toEqual(false);
    expect(tstr(true)).toEqual(false);
    expect(tstr(false)).toEqual(false);
    expect(tstr({})).toEqual(false);
    expect(tstr([])).toEqual(false);
    expect(tstr([{}])).toEqual(false);
    expect(tstr([1])).toEqual(false);
    expect(tstr([true])).toEqual(false);
  });
});
