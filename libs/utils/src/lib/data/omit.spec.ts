import { omit } from './omit';

describe('pick', () => {
  it('should pick', () => {
    const obj = { a: 'a', b: 'b' };
    const picked = omit(obj, ['a']);

    expect(picked.b).toBeTruthy();
    expect((picked as any).a).toBeUndefined();
  });
});
