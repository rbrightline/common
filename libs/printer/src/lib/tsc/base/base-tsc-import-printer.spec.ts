import { BaseTscImportPrinter } from './base-tsc-import-printer';

describe('BaseTscImportPrinter', () => {
  it('should print tsc import', () => {
    class MyPrinter extends BaseTscImportPrinter {
      protected override packageName(): string {
        return `'@rline/type'`;
      }
    }

    let r = new MyPrinter().print();

    expect(r).toEqual('');

    r = new MyPrinter().print('Some');

    expect(r).toEqual(`import { Some } from '@rline/type';`);
  });
});
