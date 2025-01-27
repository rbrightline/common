import { readPackageJSONFile } from './read-package-json-file';

describe('readPackageJSONFile', () => {
  it('should read package.json file', async () => {
    const result = await readPackageJSONFile('../test/test-package.json');

    expect(result).toBeTruthy();
    expect(result).toBeTypeOf('object');
    expect(result.name).toEqual('name');
  });
});
