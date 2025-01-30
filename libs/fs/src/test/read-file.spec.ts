import { readFile, rm, writeFile } from '../lib';
import { safepath } from './__test-utils';

describe('readFile', () => {
  const root = safepath('./readFile');
  const filePath = safepath(root, 'readFile.md');
  const content = 'read file contenet';
  beforeAll(async () => {
    await writeFile(filePath, content);
  });

  afterAll(async () => {
    await rm(filePath);
  });

  it('should read file', async () => {
    expect(await readFile(filePath)).toEqual(content);
  });
});
