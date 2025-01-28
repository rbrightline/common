import { zip } from './zip';

describe('zip array', () => {
  it('should zip array', () => {
    const result = zip([1, 2, 3, 4], [10, 20, 30, 40, 50]);
    console.log(result);
    expect(result).toEqual([
      [1, 10],
      [2, 20],
      [3, 30],
      [4, 40],
      [undefined, 50],
    ]);
  });
});
