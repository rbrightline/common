import { existsSync } from 'fs';
import { join } from 'path';
import { rename } from './filename';
import { files } from './files';

describe('filename', () => {
  it('should rename file', async () => {
    const d = await files(join(__dirname, './test/dirs'));
    const oldFileName = d[0];

    const newFileName = 'newFileName.json';
    await rename(`./test/dirs/${oldFileName}`, `${newFileName}`);
    expect(existsSync(`./test/dirs/${newFileName}`)).toBeTruthy();
    await rename(`./test/dirs/${newFileName}`, `${oldFileName}`);
  });
});
