import { join } from 'path';
import { normalizePaths } from './normalize-paths';

describe('normalizePath', () => {
  it('should normalize path', () => {
    const d = normalizePaths(join(__dirname));
    expect(d.split('/').pop()).toEqual('url');
    expect(d.split('/').shift()).toEqual('C:');
  });
});
