import { compare, hash } from './hash';
describe('hash', () => {
  it('should hash', async () => {
    const hashedValue = hash('some');
    expect(hashedValue).not.toEqual('some');
    expect(compare('some', hashedValue)).toBe(true);
  });
});
