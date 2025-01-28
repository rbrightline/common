import { pick } from './pick';

describe('pick', () => {
  it('should pick', () => {
    const obj = { a: 'a', b: 'b' };
    const picked = pick(obj, ['a']);

    expect(picked.a).toBeTruthy();
    expect((picked as any).b).toBeUndefined();
  });
});
