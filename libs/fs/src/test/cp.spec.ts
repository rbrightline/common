import { cp, isFile, rm, writeFile } from '../lib';
import { safepath } from './__test-utils';

describe('cp', () => {
  const root = safepath('./cp');
  const filepath = safepath(root, 'file.json');
  const targetpath = safepath(root, 'file-copy.json');

  beforeAll(async () => {
    await writeFile(filepath, '{}');
  });

  afterAll(async () => {
    await rm(filepath);
    await rm(targetpath);
  });

  it('should return list of cp', async () => {
    await cp(filepath, targetpath);

    expect(await isFile(targetpath)).toBeTruthy();
  });
});
