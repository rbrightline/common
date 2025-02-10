import { BaseTscDecoratorPrinter } from '../base';

export class EntityDecoratorPrinter extends BaseTscDecoratorPrinter {
  protected override decoratorName(): string {
    return 'Entity';
  }
}
