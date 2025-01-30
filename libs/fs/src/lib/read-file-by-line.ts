import fs from 'fs';
import readline from 'readline';

/**
 * Create a reader to read file line by line
 *
 * @param filePath Relative or absolute file path
 *
 * @returns
 *
 * ````typescript
 *    const content = readFileByLike('./README.md');
 *    await content.next(); // return the next line in the life
 *    await content.next(); // return the next line in the life
 *    await content.next(); // return the next line in the life
 * ````
 */
export function readFileByLine(filePath: string) {
  // Create a readable stream
  const fileStream = fs.createReadStream(filePath, { encoding: 'utf-8' });

  // Create a readline interface
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity, // Handle both \n and \r\n
  });

  // Create an async generator function
  async function* lineGenerator() {
    for await (const line of rl) {
      yield line; // Yield each line
    }
    rl.close(); // Close the readline interface when done
  }

  // Create the generator object
  const generator = lineGenerator();

  // Return an object with a next() method
  return {
    next: async () => {
      return await generator.next();
    },
  };
}
