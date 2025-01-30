import { readJsonFile } from '@nx/devkit';
import { PackageJSON } from '@rline/type';
import { rm, writePackageJSONFile } from '../lib';
import { safepath } from './__test-utils';

describe('writePackageJSONFile', () => {
  const root = safepath('./writePackageJSONFile');
  const filePath = safepath(root, 'writePackageJSONFile.md');
  const content = { name: 'some' } as PackageJSON;

  afterAll(async () => {
    await rm(filePath);
  });

  it('should read file', async () => {
    await writePackageJSONFile(filePath, content);
    expect(await readJsonFile(filePath)).toEqual(content);
  });
});
