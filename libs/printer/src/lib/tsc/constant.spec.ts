import { ConstantPrinter } from './constant';

describe('constant - print constant asignment', () => {
  it('should print constant asignment', () => {
    expect(new ConstantPrinter('some', 'some').print()).toEqual(
      `export const SOME = 'some';`
    );
  });
});
