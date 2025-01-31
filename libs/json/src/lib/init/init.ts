import { cpdir } from '@rline/fs';

/**
 * Generate the configuration file
 */
export async function init(root: string, configRoot: string) {
  await cpdir(configRoot, root);
}
