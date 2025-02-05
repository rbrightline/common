import { rval } from './rval';
describe('rval', () => {
  it('should init required values', () => {
    expect(rval([])).toEqual([]);
  });
});
