import { EntityClassPrinter } from './entity-class-printer';

describe('EntityClassPrinter', () => {
  it('should print the entity class', () => {
    const r = new EntityClassPrinter({ name: 'Address' }).print();

    expect(r).toEqual('export class Address extends BaseEntity { }');
  });
});
