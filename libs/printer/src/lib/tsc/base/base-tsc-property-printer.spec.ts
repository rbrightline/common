import { BaseTscPropertyPrinter } from './base-tsc-property-printer';
describe('BaseTscPropertyPrinter', () => {
  it('should print property', () => {
    const r = new BaseTscPropertyPrinter({
      name: 'name',
      type: 'string',
    }).print();

    expect(r).toEqual(`name: string;`);
  });
});
