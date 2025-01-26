import { randomBytes } from 'crypto';
import { encrypt, decrypt } from './encrypt';

describe('encrypt', () => {
  it('shound encrypt and decrypt', async () => {
    const key = randomBytes(32);
    const iv = randomBytes(16);
    const result = await encrypt('some', key, iv);
    const some = await decrypt(result, key, iv);
    expect(result.data).toBeDefined();
    expect(result.iv).toBeDefined();
    expect(some).toEqual('some');
  });
});
