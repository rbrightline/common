import { notHasKeys } from './not-has-keys';

describe('notHasKeys', () => {
  it('should check the object has keys or not', () => {
    type Value = {
      a: number;
      b: number;
      c: number;
    };

    const value: Value = {
      a: 100,
      b: 200,
      c: 300,
    };

    if (notHasKeys(value, ['a'])) {
      // Compilation Error
      const nValue: number = value.a;
    } else {
      const nvalue: number = value;
    }
  });
});
