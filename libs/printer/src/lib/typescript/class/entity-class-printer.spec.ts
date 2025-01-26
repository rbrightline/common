import { EntityClassPrinter } from './Entity-class.printer';

describe('EntityClassPrinter', () => {
  it('should print entity class', () => {
    const result = new EntityClassPrinter({
      type: 'entity',
      name: 'Some',
    }).print();
    expect(result).toEqual(`@Entity() export class Some {}`);
  });
});
