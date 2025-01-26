import { EnumClassPrinter } from './enum-class.printer ';

describe('EnumClassPrinter', () => {
  it('should print Enum class', () => {
    const result = new EnumClassPrinter({
      name: 'Some',
      type: 'enum',
      enum: [],
    }).print();
    expect(result).toEqual(`export enum Some {}`);
  });
});
