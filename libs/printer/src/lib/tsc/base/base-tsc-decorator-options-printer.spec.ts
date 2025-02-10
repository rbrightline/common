import { BaseTscDecoratorOptionsPrinter } from './base-tsc-decorator-options-printer';
describe('BaseTscDecoratorOptionsPrinter', () => {
  it('should print tsc decorator options', () => {
    const r = new BaseTscDecoratorOptionsPrinter({ type: 'string' }).print();

    expect(r).toEqual(JSON.stringify({ type: 'string' }));
  });
});
