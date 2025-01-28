import { join } from 'path';

describe('reaname file', () => {
  it('reaname', () => {
    const m = 'C:/some/some/some.ts';
    const r = 'C:/some/fileName.ts';
    console.log(join(m, r));
  });
});
