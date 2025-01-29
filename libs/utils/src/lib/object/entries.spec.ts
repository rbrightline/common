import { entries } from './entries';

describe('entries', () => {
  it('should return entries', async () => {
    expect(entries({ name: 'name', some: undefined, other: null })).toEqual([
      ['name', 'name'],
    ]);
  });
});
