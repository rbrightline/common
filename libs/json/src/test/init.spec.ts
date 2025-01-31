import { files, rmdir } from '@rline/fs';
import { init } from '../lib';
import { safepath } from './__test-utils';

export const CONFIG_FILE_PATH = safepath(
  'assets',
  'config',
  'schema.config.json'
);

describe('init', () => {
  const projectRoot = safepath('./init');

  afterAll(async () => {
    await rmdir(projectRoot, { recursive: true });
  });

  it('should init', async () => {
    await init(projectRoot, CONFIG_FILE_PATH);
    const result = await files(projectRoot);
    expect(result.find((e) => e.endsWith('schema.config.json'))).toBeTruthy();
  });
});
