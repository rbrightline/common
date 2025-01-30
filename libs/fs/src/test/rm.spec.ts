import { tryCatch } from '@rline/utils';
import { files, rm, writeFile } from '../lib';
import { safepath } from './__test-utils';

describe('rm', () => {
  const root = safepath('rm');
  const filepath = safepath(root, 'rm.md');

  beforeAll(async () => {
    await writeFile(filepath, '');
  });
  afterAll(async () => {
    await tryCatch(() => rm(filepath));
    expect(await files(root)).toEqual([]);
  });

  it('shoudl work', async () => {
    await rm(filepath);
    expect(await files(root)).toEqual([]);

    expect(1).toEqual(1);
  });
});
