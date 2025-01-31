import { getAllFilesAndDirs } from '../lib';
import { safepath } from './__test-utils';

describe('getAllDirsAndFiles', () => {
  const root = safepath('./');
  it('should get all dirs and files', async () => {
    const allDirs = await getAllFilesAndDirs(root);
    expect(allDirs.length).greaterThan(10);
  });
});
