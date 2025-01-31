import { dirs, mkdir, rmdir } from '../lib';
import { safepath } from './__test-utils';

describe('dirs', () => {
  const root = safepath('./dirs');
  const testDirs = ['./subdir', './subdir/dir1', './subdir/dir2'].map((e) =>
    safepath(root, e)
  );

  beforeAll(async () => {
    await Promise.all(testDirs.map(async (e) => await mkdir(e)));
  });

  afterAll(async () => {
    await rmdir(safepath(testDirs[0]), { recursive: true });
  });

  it('should return list of dirs', async () => {
    const result = await dirs(safepath(testDirs[0]));
    expect(result).toEqual(['dir1', 'dir2']);
  });
});
