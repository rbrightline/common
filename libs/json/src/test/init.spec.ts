import { files, rmdir } from '@rline/fs';
import { init } from '../lib';
import { safepath } from './__test-utils';

export const SCHEMA_CONFIG_TEMPLATE = safepath('assets', 'config');

describe('init', () => {
  const root = safepath('./init');

  afterAll(async () => {
    setTimeout(() => {});
    try {
      await rmdir(root, { recursive: true });
    } catch (err) {
      console.error(err);
    }
  });

  it('should init', async () => {
    await init(root, SCHEMA_CONFIG_TEMPLATE);
    const result = await files(root);
    expect(result.find((e) => e.endsWith('schema.config.json'))).toBeTruthy();
  });
});
