import { createPathScope } from '../lib';

describe('createPathScope', () => {
  it('should create path scope', () => {
    const safepath = createPathScope(__dirname);
    expect(() => safepath('../')).toThrow();
    expect(() => safepath('../..')).toThrow();
    expect(() => safepath('./../..')).toThrow();
    expect(() => safepath('/')).toThrow();
  });
});
