import { ToString } from '@rline/type';
import { appendFile } from './append-file';

/**
 * Append file line by line
 * 
 * @param filepath Relative or absolute file path
 * 
 * ````typescript
 *    './filename.md'
 *    '/files/filename.md'
 * ````
 * 
 * @param content Any contenet that extends {@link ToString} interface
 * 
 * ````typescript
 *      const content:T =  true
 *      const content:T =  false
 *      const content:T =  { some:'some'}
 *      const content:T =  'text content',
 *      const content:T =  ['Array', 'Content']
 *      const content:T =  1233445
 *      const content:T =  Buffer.from([...])
 * ````
 * 
 * @returns
 * 
 * ````typescript
 * 
 *    await  appendFileByLine('./README.md', '- first line');
 *    await  appendFileByLine('./README.md', '- second line');
 *    await  appendFileByLine('./README.md', '- third line');
 * 
 * ````
 
 * ````markdown
 *
 *    # README.MD
 *
 *    - first line
 *    - second line
 *    - third line
 *  
 * ````
 *
 */
export async function appendFileByLine<T extends ToString>(
  filepath: string,
  content: T
): Promise<void> {
  return appendFile(filepath, '\n' + content.toString());
}
