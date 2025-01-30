import { files, readFile, rename, rm, writeFile } from '../lib';
import { safepath } from './__test-utils';

describe('rename', () => {
  const root = safepath('./rename');
  const filename = 'rename.md';
  const updatedFilename = 'updated.md';
  const filePath = safepath(root, filename);
  const updatedFilepath = safepath(root, updatedFilename);
  const content = filename;
  beforeAll(async () => {
    await writeFile(filePath, content);
  });

  afterAll(async () => {
    await Promise.all(
      [filePath, updatedFilepath].map((e) => async () => {
        try {
          await rm(e);
        } catch (err) {
          //
        }
      })
    );
  });

  it('should read file', async () => {
    await rename(filePath, updatedFilename);
    expect(await readFile(updatedFilepath)).toEqual(content);
    const fileNames = await files(root);

    expect(fileNames).toEqual([updatedFilename]);
  });
});
