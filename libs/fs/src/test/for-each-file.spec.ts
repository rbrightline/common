import { join } from 'path';
import {
  appendFile,
  forEachFile,
  mkdir,
  readFile,
  rmdir,
  writeFile,
} from '../lib';
import { safepath } from './__test-utils';

describe('forEachFile', () => {
  const root = safepath('./forEachFile');

  const subdirs = ['dir1', 'dir2', 'd3'].map((e) => join(root, e));

  const subDirFiles = ['file1.md', 'file2.md', 'file3.md'].map((e) =>
    safepath(subdirs[0], e)
  );

  const all = [...subDirFiles, ...subdirs, root];

  beforeAll(async () => {
    await Promise.all(subdirs.map((e) => mkdir(e)));
    await Promise.all(subDirFiles.map((e) => writeFile(e, '')));
  });

  afterAll(async () => {
    await rmdir(root, { recursive: true });
  });

  it('should go through for each file', async () => {
    await forEachFile(
      root,
      async (filepath) => {
        appendFile(filepath, 'u');
      },
      { recursive: true }
    );
    expect(await Promise.all(subDirFiles.map((e) => readFile(e)))).toEqual([
      'u',
      'u',
      'u',
    ]);
  });
});
