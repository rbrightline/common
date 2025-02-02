import { nbr } from './nbr';

describe('nbr initializer', () => {
  it('should initialize optional number', async () => {
    let value = nbr(3);
    value = 0;
    value = 1;
    value = 2;

    value = undefined;

    // compiler error
    // value = null
  });

  it('should initialize required number', async () => {
    let value = nbr(1, { required: true });
    value = 0;
    value = 1;
    value = 2;

    // compiler error
    // value = undefined
  });

  it('should NOT initialize required number with 0', async () => {
    expect(() => nbr(0, { required: true })).toThrow();
  });
});
