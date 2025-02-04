import { nestr } from './nestr';

describe('nestr', () => {
  it('nestr(value) should return true if the value is not empty', () => {
    expect(nestr('')).toEqual(false);
    expect(nestr('some')).toEqual(true);
  });
});
