import { arr } from './arr';

describe('array initializer', () => {
  it('should initialize optional array', () => {
    let value = arr([{ a: 1 }], { required: false });
    expect(value).toEqual([{ a: 1 }]);

    value = arr([{ a: 2 }]);
    expect(value).toEqual([{ a: 2 }]);

    value = arr(undefined);
    expect(value).toEqual(undefined);

    value = undefined;
    expect(value).toEqual(undefined);

    // compiler erorr
    // value = null
  });

  it('should initialize required arrray', () => {
    let value = arr([{ a: 1 }], { required: true });
    expect(value).toEqual([{ a: 1 }]);

    value = [{ a: 3 }];

    // Compiler error
    // value = arr( [{ some: 'some' }]);
    // value = [{ some: 'some' }];

    // Compiler error
    // value = undefined
    // value = null
  });
});
