import { forEachDirectory, mkdir } from '../lib';
import { safepath } from './__test-utils';

describe('forEachDirectory', () => {
  const root = safepath('./forEachDirectory');
  const dirs = ['dir1', 'dir2', 'dir3'].map((e) => safepath(root, e));

  beforeAll(async () => {
    await mkdir(root);
    await Promise.all(dirs.map(async (e) => await mkdir(safepath(root, e))));
  });

  afterAll(async () => {
    // await rmdir(root, { recursive: true });
    // await rmdir(root);
  });

  it('should go through each directory', async () => {
    await forEachDirectory(root, async (dirpath) => {
      console.log(dirs);
      console.log(dirpath);
      expect(dirs).include(dirpath);
    });
  });
});
