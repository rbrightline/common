import { TypeClassPrinter } from './type-class.printer';

describe('TypeClassPrinter', () => {
  it('should print Enum class', () => {
    const result = new TypeClassPrinter({
      name: 'Some',
      type: 'type',
    }).print();
    expect(result).toEqual(`export type Some = {}`);
  });
});
