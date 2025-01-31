import { entries } from './entries';

describe('entries', () => {
  it('should return entries', async () => {
    type T = { a: string; b: number };
    const value: T = { a: 'some', b: 100 };

    const pairs = entries(value);

    expect(pairs).toEqual([
      ['a', 'some'],
      ['b', 100],
    ]);
  });
});
