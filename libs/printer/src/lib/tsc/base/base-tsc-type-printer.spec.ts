import { BaseTscTypePrinter } from './base-tsc-type-printer';
describe('TscTypePrinter', () => {
  it('should print basic TypeScript type', () => {
    const printer = new BaseTscTypePrinter({ name: 'Some' });

    expect(printer.print('')).toEqual(`export type Some = { }`);
  });
});
