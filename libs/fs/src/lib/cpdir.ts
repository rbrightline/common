import { join } from 'path';
import { cp } from './cp';
import { forEachFile } from './for-each-file';
import { mkdir } from './mkdir';

/**
 * Copy directory recursively
 * @param source source directory path
 * @param target target directory pathF
 * @returns
 *
 * ````typescript
 *    await cpdir('./directory', './other');
 *    await cpdir('./other', './other/other/some');
 * ````
 */
export async function cpdir(source: string, target: string): Promise<void> {
  await mkdir(target);
  await forEachFile(
    source,
    async (filepath: string) => {
      const targetfilepath = filepath.replace(source, target);
      await mkdir(join(filepath, '..'));
      await cp(filepath, targetfilepath);
    },
    { recursive: true }
  );
}
