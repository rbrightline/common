import { isNumber } from '../number';
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

    class User {
      isActive?: boolean;
      hasPermission?: {
        product?: {
          read?: boolean;
        };
      };
    }

    const user: User = {
      hasPermission: { product: { read: true } },
      isActive: true,
    };

    if (hasKeys(user, ['hasPermission', 'isActive'])) {
      //
    }
  });

  it('should accumulate numbers', () => {
    const arr: (number | string)[] = [1, 'some', 2, 'other'];

    arr.reduce<number>((p, c) => (isNumber(c) ? p + c : p), 0);
  });
});
