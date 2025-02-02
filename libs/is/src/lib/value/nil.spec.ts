import { nil } from './nil';

describe('nil', () => {
  it('nil(value) should return true if the value is null', () => {
    expect(nil(null)).toEqual(true);
    expect(nil([])).toEqual(false);
    expect(nil(1)).toEqual(false);
    expect(nil(-1)).toEqual(false);
    expect(nil(0)).toEqual(false);
    expect(nil(false)).toEqual(false);
    expect(nil(true)).toEqual(false);
    expect(nil({})).toEqual(false);
    expect(nil([null])).toEqual(false);
    expect(nil([undefined])).toEqual(false);
    expect(nil([])).toEqual(false);
  });
});
