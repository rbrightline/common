import { randomBytes } from 'crypto';
import { rmdir, stat, writeFile } from '../lib';
import { safepath } from './__test-utils';

describe('stat', () => {
  const root = safepath('stat');
  const filepath = safepath(root, 'stat.md');
  const size = 20;

  beforeAll(async () => {
    await writeFile(filepath, randomBytes(size));
  });

  afterAll(async () => {
    await rmdir(root, { recursive: true });
  });

  it('should stat', async () => {
    const ss = await stat(filepath);
    expect(ss.size).toEqual(size);
  });
});
