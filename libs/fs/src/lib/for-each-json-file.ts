import {
  forEachFile,
  ForEachFileCallBack,
  ForEachFileOptions,
} from './for-each-file';

/**
 * Run the callback function for each filepath under the root directory (by default recursively)
 * @param root root directory
 * @param callback callback {@link ForEachFileCallBack}
 * @param options options {@linkk ForEachFileOptions} recursive by default
 * @returns
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
