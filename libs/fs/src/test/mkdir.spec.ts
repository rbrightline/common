import { getLastSegment } from '@rline/utils';
import { dirs, mkdir, rmdir } from '../lib';
import { safepath } from './__test-utils';

describe('mkdir', () => {
  const root = safepath('./mkdir');
  const items = ['dir1', 'dir2'].map((e) => safepath(root, e));
  beforeAll(async () => {
    await mkdir(...items);
  });

  afterAll(async () => {
    await rmdir(root, { recursive: true });
  });
  it('should create directory', async () => {
    expect(await dirs(root)).toEqual(items.map(getLastSegment));
  });
});
