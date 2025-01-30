import { ToString } from '@rline/type';
import { __appendFile } from './__fs__';

/**
 * Append file
 *
 * @param filepath  Relative or absolute file path
 *
 * ````typescript
 *    './filename.md'
 *    '/files/filename.md'
 * ````
 *
 * @param content Any contenet that extends {@link ToString} interface
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
 * ````typescript
 *    await appendFile('./README.MD', 'h')
 *    await appendFile('./README.MD', 'e')
 *    await appendFile('./README.MD', 'l')
 *    await appendFile('./README.MD', 'l')
 *    await appendFile('./README.MD', 'o')
 * ````
 *
 * ````markdown
 *    # README.MD
 *
 *    hello
 *
 * ````
 *
 *
 */
export async function appendFile<T extends ToString>(
  filepath: string,
  content: T
): Promise<void> {
  return new Promise<void>((res, rej) => {
    try {
      __appendFile(filepath, content.toString(), (err) => {
        if (err) {
          rej(err);
        } else {
          res();
        }
      });
    } catch (err) {
      rej(err);
    }
  });
}
