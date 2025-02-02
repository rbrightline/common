import { nearr } from './nearr';

describe('nearr', () => {
  it('nearr(value) should return true if the value is not empty', () => {
    expect(nearr([])).toEqual(false);
  });
});
