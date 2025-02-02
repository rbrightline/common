import { udef } from './udef';

describe('udef', () => {
  it('udef(value) should return true if the value is undefined', () => {
    expect(udef(undefined)).toEqual(true);
    expect(udef(null)).toEqual(false);
    expect(udef(1)).toEqual(false);
    expect(udef(-1)).toEqual(false);
    expect(udef(0)).toEqual(false);
    expect(udef(true)).toEqual(false);
    expect(udef(false)).toEqual(false);
    expect(udef({})).toEqual(false);
    expect(udef([{}])).toEqual(false);
    expect(udef([true])).toEqual(false);
    expect(udef([undefined])).toEqual(false);
    expect(udef({ value: undefined })).toEqual(false);
  });
});
