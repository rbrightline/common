import { readFileByLine } from './read-file-by-line';

/**
 * Read file content ( using stream ) and check that the file contains the `content`
 * @param filepath Relative or absolute file path
 *
 * ````typescript
 *    './filename.md'
 *    '/files/filename.md'
 * ````
 *
 * @param content Any contenet that extends {@link ToString} interface
 *
 *
 * ````typescript
 *    const content:T =  true
 *    const content:T =  false
 *    const content:T =  { some:'some'}
 *    const content:T =  'text content',
 *    const content:T =  ['Array', 'Content']
 *    const content:T =  1233445
 *    const content:T =  Buffer.from([...])
 * ````
 *
 * @returns
 *
 * ````markdown
 *    // ./README.md file
 *    # Title
 *
 *    Sample mark down file
 *
 * ````
 *
 * ````typescript
 *
 *    await  fileContain('./README.md', '# Title'); // output: true
 *    await  fileContain('./README.md', '# None');  // output: false
 *
 * ````
 *
 *
 */
export async function fileContain(
  filepath: string,
  content: string
): Promise<boolean> {
  const reader = readFileByLine(filepath);

  while (reader) {
    const next = await reader.next();
    if (next.value) {
      if (next.value.includes(content)) {
        return true;
      }
    }
    if (next.done) {
      return false;
    }
  }

  return false;
}
