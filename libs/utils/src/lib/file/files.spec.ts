import { join } from 'path';
import { files } from './files';

describe('files', () => {
  it('should find files', async () => {
    expect(await files(join(__dirname, '..', 'test', 'dirs'))).toEqual([
      'file1.json',
      'file2.json',
    ]);
  });
});
