import { join } from 'path';
import { files } from './files';
import { isDirectory, isFile } from './stat';

export async function forEachFile(
  root: string,
  callback: (filepath: string) => Promise<void>
) {
  const directories = await files(root, true);

  for (const dir of directories) {
    const filePath = join(root, dir);
    if (await isFile(filePath)) {
      await callback(filePath);
    } else if (await isDirectory(filePath)) {
      const newRoot = join(root, dir);
      await forEachFile(newRoot, callback);
    }
  }
}
