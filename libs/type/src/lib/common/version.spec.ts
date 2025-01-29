import { Version } from './version';

describe('Version', () => {
  it('should work', () => {
    let v: Version = '0.0.0';
    v = '0.0.2';
    v = '9.9.9';
    v = '9.9.9-LTS';
  });
});
