import { cpdir, forEachFile, isDirectory, isFile, rm, writeFile } from '../lib';
import { safepath } from './__test-utils';

describe('cpdir', () => {
  const root = safepath('./cpdir');
  const sourceRoot = safepath(root, 'source');
  const targetRoot = safepath(root, 'target');
  const filepath = safepath(sourceRoot, 'file.json');
  const targetFilepath = safepath(targetRoot, 'file.json');

  beforeAll(async () => {
    await writeFile(filepath, '{}');
  });

  afterAll(async () => {
    await forEachFile(root, rm, { recursive: true });
  });

  it('should return list of cpdir', async () => {
    await cpdir(sourceRoot, targetRoot);
    expect(await isDirectory(targetRoot)).toBeTruthy();
    expect(await isFile(targetFilepath)).toBeTruthy();
  });
});
