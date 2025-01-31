import { ForEachFileCallBack } from './for-each-file';
import { getAllFilesAndDirs } from './get-all-files-and-dirs';

/**
 * Go through for each path from low to high level.
 * @param root
 * @param callback
 */
export async function forEachPath(root: string, callback: ForEachFileCallBack) {
  const items = await getAllFilesAndDirs(root);

  for (const i of items) {
    await callback(i);
  }
}
