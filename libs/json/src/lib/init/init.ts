import { cpdir } from '@rline/fs';

/**
 * Generate the configuration file
 */
export async function init(root: string, templateFileDir: string) {
  await cpdir(templateFileDir, root);
}
