import { BaseTscDecoratorPrinter } from '../base';

export class ViewColumnDecoratorPrinter extends BaseTscDecoratorPrinter {
  protected override decoratorName(): string {
    return 'ViewColumn';
  }
}
