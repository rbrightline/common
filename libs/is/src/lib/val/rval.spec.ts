import { rval } from './rval';
describe('rval', () => {
  it('should init required values', () => {
    // expect(() => rval(undefined)).toThrow();
    // expect(() => rval(null)).toThrow();
    // expect(rval(undefined, '')).toEqual('');
    // expect(rval(null, '')).toEqual('');
    // expect(rval(-1)).toEqual(-1);
    // expect(rval(0)).toEqual(0);
    // expect(rval({})).toEqual({});
    expect(rval([])).toEqual([]);
  });
});
