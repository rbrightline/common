import { PackageJSON } from './package-json';

describe('PakcageJSON', () => {
  it('should work', () => {
    const value: Partial<PackageJSON> = {
      dependencies: {
        some: '10.0.0-GA',
      },
    };
  });
});
