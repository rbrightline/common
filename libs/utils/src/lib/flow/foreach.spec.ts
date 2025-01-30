import { foreach } from './foreach';

describe('foreach', () => {
  it('should do for each', () => {
    foreach([0, 1, 2, 3, 4], async (value, index, first, last) => {
      expect(value).toEqual(index);

      if (value == 0) {
        expect(first).toBeTruthy();
        expect(last).toBeFalsy();
      } else if (value == 4) {
        expect(first).toBeFalsy();
        expect(last).toBeTruthy();
      } else {
        expect(first).toBeFalsy();
        expect(last).toBeFalsy();
      }
    });
  });
});
