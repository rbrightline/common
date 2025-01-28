import { join } from 'path';
import { dirs } from './dirs';

describe('dirs', () => {
  it('should find dirs', async () => {
    expect(await dirs(join(__dirname, '..', 'test', 'dirs'))).toEqual([
      'dir1',
      'dir2',
    ]);
  });
});
