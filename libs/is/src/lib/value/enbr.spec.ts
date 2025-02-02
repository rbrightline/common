import { enbr } from './enbr';

describe('enbr', () => {
  it('enbr should return true if the value is 0 or NaN', () => {
    expect(enbr(0)).toEqual(true);
    expect(enbr(NaN)).toEqual(true);

    expect(enbr(1)).toEqual(false);
    expect(enbr(-1)).toEqual(false);
    expect(enbr(0.1)).toEqual(false);
  });
});
