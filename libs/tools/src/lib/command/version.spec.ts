import { version, versions } from './version';

describe('Print version', () => {
  it('should print version', async () => {
    await version('tools');
  });
  it('should print versions', async () => {
    await versions();
  });
});
