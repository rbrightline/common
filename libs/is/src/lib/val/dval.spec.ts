import { dval } from './dval';
describe('dval- default value', () => {
  it('should init with default value', () => {
    expect(dval(undefined, '')).toEqual('');
    expect(dval(undefined, {})).toEqual({});
    expect(dval(undefined, 0)).toEqual(0);
    expect(dval(undefined, [])).toEqual([]);
  });
});
