import { forEachJSONFile } from './for-each-json-file';

describe('forEachJSONFile', () => {
  it('should go throught each file under the directory', async () => {
    await forEachJSONFile('./', (f) => console.log(f));
  });
});
