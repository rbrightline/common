import { getAllFilesAndDirs } from '../lib';
import { safepath } from './__test-utils';

describe('getAllDirsAndFiles', () => {
  const root = safepath('rmdir');
  it('should get all dirs and files', async () => {
    const result = await getAllFilesAndDirs(root);
    console.log(result);
  });
});
