import { hasKeys } from './has-keys';

describe('hasKeys', () => {
  it('should check the object has keys or not', () => {
    type Value = {
      a?: number;
      b?: number;
      c?: number;
    };
    const value: Value = {
      a: 100,
      b: 200,
      c: 300,
    };
    if (hasKeys(value, ['a'])) {
      const nValue: number = value.a;
    } else {
      // Compilation errot
      // const nValue: number = value.a;
    }
  });
});
