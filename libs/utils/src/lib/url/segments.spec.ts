import { segments } from './segments';

describe('segments', () => {
  it('should return segments', () => {
    let s = segments('./a/b/c');
    expect(s).toEqual(['.', 'a', 'b', 'c']);
    s = segments('.\\a\\b\\c');
    expect(s).toEqual(['.', 'a', 'b', 'c']);
  });
});
