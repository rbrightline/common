import { BaseTscDecoratorPrinter } from '../base';

export class ViewDecoratorPrinter extends BaseTscDecoratorPrinter {
  protected override decoratorName(): string {
    return 'View';
  }
}
