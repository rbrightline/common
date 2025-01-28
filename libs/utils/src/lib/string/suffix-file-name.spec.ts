import { suffixFileName } from './suffix-file-name';

describe('suffixFileName', () => {
  it('should suffix file name', () => {
    let filename = 'some.file.name.ts';
    filename = suffixFileName(filename, 'some');

    expect(filename).toEqual('some.file.namesome.ts');
  });
});
