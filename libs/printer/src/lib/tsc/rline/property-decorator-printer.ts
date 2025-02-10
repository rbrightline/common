import { BaseTscDecoratorPrinter } from '../base';

export class PropertyDecoratorPrinter extends BaseTscDecoratorPrinter {
  protected override decoratorName(): string {
    return 'Property';
  }
}
