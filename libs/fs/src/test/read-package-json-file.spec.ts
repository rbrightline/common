import { readPackageJSONFile, rm, writeFile } from '../lib';
import { safepath } from './__test-utils';

describe('readPackageJSONFile', () => {
  const root = safepath('./readPackageJSONFile');
  const filePath = safepath(root, 'readPackageJSONFile.json');
  const content = JSON.stringify({
    name: 'readPackageJSONFile',
  });
  beforeAll(async () => {
    await writeFile(filePath, content);
  });

  afterAll(async () => {
    await rm(filePath);
  });

  it('should read file', async () => {
    expect((await readPackageJSONFile(filePath)).name).toEqual(
      'readPackageJSONFile'
    );
  });
});
