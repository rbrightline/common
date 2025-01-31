import { dirs, mkdir, rmdir } from '../lib';
import { safepath } from './__test-utils';

describe('rmdir', () => {
  const root = safepath('rmdir');
  const items = ['dir1', 'dir2'];
  const subItemPaths = items
    .map((e) => {
      return items.map((i) => safepath(root, e, i));
    })
    .flat();

  beforeAll(async () => {
    await mkdir(root);
    await mkdir(...subItemPaths);
  });

  it('should work', async () => {
    await rmdir(root, { recursive: true });
    expect(await dirs(safepath())).not.include('rmdir');
  });
});
