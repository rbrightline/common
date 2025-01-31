import { ForEachFileCallBack } from './for-each-file';
import { getAllFilesAndDirs } from './get-all-files-and-dirs';
import { isDirectory, isFile } from './stat';

export async function forEachFileAndDirectory(
  root: string,
  callback: ForEachFileCallBack
): Promise<void> {
  const all = await getAllFilesAndDirs(root);

  for (const f of all) {
    if (await isFile(f)) {
      await callback(f);
    }
  }

  for (const f of all) {
    if (await isDirectory(f)) {
      await callback(f);
    }
  }
}
