import { StringLike } from '@rline/utils';
import { appendFile } from './append-file';

/**
 * Basically prefix the appending with a new line (\n)
 * @param filepath
 * @param content
 * @returns
 */
export async function appendFileByLine<T extends StringLike>(
  filepath: string,
  content: T
) {
  return appendFile(filepath, '\n' + content.toString());
}
