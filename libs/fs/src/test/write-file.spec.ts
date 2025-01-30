import { readFile, rm, writeFile } from '../lib';
import { safepath } from './__test-utils';

describe('writeFile', () => {
  const root = safepath('./writeFile');
  const filePath = safepath(root, 'writeFile.md');
  const content = 'read file contenet';

  afterAll(async () => {
    await rm(filePath);
  });

  it('should read file', async () => {
    await writeFile(filePath, content);
    expect(await readFile(filePath)).toEqual(content);
  });
});
