import { forEachJSONFile, rm, writeFile } from '../lib';
import { safepath } from './__test-utils';

describe('forEachJSONFile', () => {
  const root = safepath('./forEachJSONFile');
  const filepaths = ['file1.md', 'file2.md', 'file3.md'].map((e) =>
    safepath(root, e)
  );

  beforeAll(async () => {
    await Promise.all(filepaths.map((e) => writeFile(e, `# Path: ${e}`)));
  });

  afterAll(async () => {
    await Promise.all(filepaths.map((e) => rm(e)));
  });

  it('should go through for each json file', async () => {
    await forEachJSONFile(root, async (filepath) => {
      expect(filepaths).include(filepath);
    });
  });
});
