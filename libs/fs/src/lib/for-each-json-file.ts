import {
  forEachFile,
  ForEachFileCallBack,
  ForEachFileOptions,
} from './for-each-file';

/**
 * The only difference from the {@link forEachFile} is that the function only operate for files with `.json` extention
 * For more information, have a look at {@link forEachFile}
 */
export async function forEachJSONFile(
  root: string,
  callback: ForEachFileCallBack,
  options: ForEachFileOptions = { recursive: true }
): Promise<void> {
  return await forEachFile(
    root,
    async (filepath: string) => {
      if (filepath.endsWith('.json')) {
        await callback(filepath);
      }
    },
    options
  );
}
