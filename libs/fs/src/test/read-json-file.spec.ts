import { readJSONFile, rm, writeFile } from '../lib';
import { safepath } from './__test-utils';

describe('readJSONFile', () => {
  const root = safepath('./readJSONFile');
  const filePath = safepath(root, 'readJSONFile.json');
  const content = JSON.stringify({
    name: 'readJSONFile',
  });
  beforeAll(async () => {
    await writeFile(filePath, content);
  });

  afterAll(async () => {
    await rm(filePath);
  });

  it('should read file', async () => {
    expect((await readJSONFile(filePath)).name).toEqual('readJSONFile');
  });
});
