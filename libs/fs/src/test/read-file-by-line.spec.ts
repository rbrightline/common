import { writeFile } from '../lib';
import { readFileByLine } from '../lib/read-file-by-line';
import { safepath } from './__test-utils';

describe('readFileByLine', () => {
  const filepath = safepath('./readFileByLine.md');
  const firstLine = '- first line';
  const secondLine = '- second line';
  const content = `${firstLine}\n${secondLine}`;

  beforeAll(async () => {
    await writeFile(filepath, content);
  });

  // afterAll(async () => {
  //   await rm(filename);
  // });

  it('should read file by line', async () => {
    const lines = readFileByLine(filepath);

    const first = await lines.next();
    const second = await lines.next();

    expect(first.value).toEqual(firstLine);
    expect(second.value).toEqual(secondLine);
  });
});
