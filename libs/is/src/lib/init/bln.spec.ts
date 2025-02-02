import { bln } from './bln';

describe('bln initializer', () => {
  it('should initialize optional boolean', () => {
    let value = bln(undefined);

    expect(value).toEqual(undefined);
    value = bln(true);
    expect(value).toEqual(true);

    value = bln(false);
    expect(value).toEqual(false);
  });

  it('should initialize required boolean', async () => {
    let value = bln(true, { required: true });
    expect(value).toEqual(true);

    value = false;
    value = true;

    // Compiler error
    // value = undefined
  });
});
