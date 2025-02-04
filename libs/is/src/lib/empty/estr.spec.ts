import { estr } from './estr';

describe('estr', () => {
  it('estr(value) should return true if the vlaue is empty ', () => {
    expect(estr('')).toEqual(true);
    expect(estr('                     ')).toEqual(true);
    expect(estr('                               ')).toEqual(true);
    expect(estr('some')).toEqual(false);
  });
});
