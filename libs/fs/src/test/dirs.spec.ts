import { dirs, mkdir, rmdir } from '../lib';
import { safepath } from './__test-utils';

describe('dirs', () => {
  const testDirs = ['./dirs', './dirs/dir1', './dirs/dir2'];
  beforeAll(async () => {
    await Promise.all(testDirs.map(async (e) => await mkdir(safepath(e))));
  });

  afterAll(async () => {
    await rmdir(safepath(testDirs[0]), { recursive: true });
    await rmdir(safepath(testDirs[0]));
  });
  it('should return list of dirs', async () => {
    const result = await dirs(safepath(testDirs[0]));
    expect(result).toEqual(['dir1', 'dir2']);
    console.log(result);
  });
});
