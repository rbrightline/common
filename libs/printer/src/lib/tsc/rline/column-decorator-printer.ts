import { BaseTscDecoratorPrinter } from '../base';

export class ColumnDecoratorPrinter extends BaseTscDecoratorPrinter {
  protected override decoratorName(): string {
    return 'Column';
  }
}
