import { fail } from 'assert';
import { appendFile, readFileByLine, rmdir, writeFile } from '../lib';
import { safepath } from './__test-utils';

describe('appendFile', () => {
  const root = safepath('./appendFile');
  const filepath = safepath(root, 'append-file.md');

  beforeAll(async () => {
    await writeFile(filepath, '# append file test\n## Timestamps \n');
  });

  afterAll(async () => {
    await rmdir(root, { recursive: true });
  });
  it('should append file', async () => {
    const timestamp = new Date().toISOString();
    const appending = `- passed ${timestamp}`;

    await appendFile(filepath, appending + '\n');

    const reader = readFileByLine(filepath);

    while (reader) {
      const result = await reader.next();

      console.log('Result: ', result);
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
