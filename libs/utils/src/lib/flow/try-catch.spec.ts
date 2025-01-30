import { fail } from 'assert';
import { oshit } from './oshit';
import { tryCatch } from './try-catch';

describe('tryCatch', () => {
  it('should try catch', async () => {
    const value = 'hello';
    const errorValue = 'errorValue';

    let r = await tryCatch(() => new Promise((s, e) => s(value)));
    expect(r).toEqual(value);

    r = await tryCatch(
      () => new Promise((s, e) => e(value)),
      async (e) => errorValue
    );

    expect(r).toEqual(errorValue);

    r = await tryCatch(() => new Promise((s, e) => e(value)));
    expect(r).toEqual(null);

    const shouldThrow = async () =>
      await tryCatch(() => new Promise((s, e) => e()), oshit);

    try {
      await shouldThrow();
      fail();
    } catch (err) {
      //
    }
  });
});
