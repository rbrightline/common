import { fail } from 'assert';
import { appendFileByLine, readFileByLine, writeFile } from '../lib';
import { safepath } from './__test-utils';

describe('appendFileByLine', () => {
  const filepath = safepath('./append-file-by-line.md');

  beforeAll(async () => {
    await writeFile(filepath, '# append file by line test\n## Timestamps \n');
  });
  it('should append file', async () => {
    const timestamp = new Date().toISOString();
    const appending = `- passed ${timestamp}`;

    await appendFileByLine(filepath, appending);

    const reader = readFileByLine(filepath);

    while (reader) {
      const result = await reader.next();
      if (result.value == appending) {
        console.log('Breaking Value: ', result.value);
        break;
      }
      if (result.done) {
        console.log('DoneValue : ', result.value);
        fail(`Not append "${appending}"`);
      }
    }
  });
});
