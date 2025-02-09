import { BaseTscClassPrinter } from './base-tsc-class-printer';
describe('BaseTscClassPrinter', () => {
  it('should print the class', () => {
    const c = new BaseTscClassPrinter({ name: 'Some' }).print('// content\n');

    expect(c).toEqual('export class Some { // content\n }');
  });
});
