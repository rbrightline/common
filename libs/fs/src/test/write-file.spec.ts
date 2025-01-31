import { readFile, rmdir, writeFile } from '../lib';
import { safepath } from './__test-utils';

describe('writeFile', () => {
  const root = safepath('writeFile');
  const filePath = safepath(root, 'write-file.md');
  const content = 'read file contenet';

  afterAll(async () => {
    await rmdir(root, { recursive: true });
  });

  it('should read file', async () => {
    await writeFile(filePath, content);
    expect(await readFile(filePath)).toEqual(content);
  });
});
