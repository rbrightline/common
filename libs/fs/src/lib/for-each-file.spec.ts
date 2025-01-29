import { forEachFile } from './for-each-file';

describe('forEachFile', () => {
  it('should go throught each file under the directory', async () => {
    await forEachFile('./', (f) => console.log(f));
  });
});
