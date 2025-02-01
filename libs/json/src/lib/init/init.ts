import { cpdir } from '@rline/fs';

/**
 * Create a json schema project
 *
 * @param root project's root directory
 * @param templateFileDir the template (default) `schema.config.json` file
 */
export async function init(root: string, templateFileDir: string) {
  await cpdir(templateFileDir, root);
}
