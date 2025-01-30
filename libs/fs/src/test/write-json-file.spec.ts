import { readJsonFile } from '@nx/devkit';
import { rm, writeJSONFile } from '../lib';
import { safepath } from './__test-utils';

describe('writeJSONFile', () => {
  const root = safepath('./writeJSONFile');
  const filePath = safepath(root, 'writeJSONFile.md');
  const content = { name: 'some' };

  afterAll(async () => {
    await rm(filePath);
  });

  it('should read file', async () => {
    await writeJSONFile(filePath, content);
    expect(await readJsonFile(filePath)).toEqual(content);
  });
});
