import { BaseTscDecoratorPrinter } from '../base';

export class ColumnDecoratorOptionsPrinter extends BaseTscDecoratorPrinter {
  protected override decoratorName(): string {
    return 'Column';
  }
}
