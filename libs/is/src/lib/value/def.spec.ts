import { def } from './def';

describe('def', () => {
  it('def(value) should return true if the value is defined', () => {
    expect(def(undefined)).toEqual(false);
    expect(def(null)).toEqual(false);

    expect(def([NaN, null, undefined])).toEqual(true);
    expect(def([null, 1, null])).toEqual(true);
    expect(def(NaN)).toEqual(true);
    expect(def({})).toEqual(true);
    expect(def(1)).toEqual(true);
    expect(def(-1)).toEqual(true);
    expect(def(0)).toEqual(true);
    expect(def([])).toEqual(true);
    expect(def([null])).toEqual(true);
    expect(def([undefined])).toEqual(true);
  });
});
