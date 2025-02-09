import { BaseTscDecoratorPrinter } from './base-tsc-decorator-printer';
describe('BaseTscDecoratorPrinter', () => {
  it('should print tsc decorator', () => {
    const r = new BaseTscDecoratorPrinter({
      name: 'Property',
    }).print('content');
    expect(r).toEqual(`@Property(content)`);
  });
});
