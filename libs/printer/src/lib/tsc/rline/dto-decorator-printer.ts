import { BaseTscDecoratorPrinter } from '../base';

export class DtoDecoratorPrinter extends BaseTscDecoratorPrinter {
  protected override decoratorName(): string {
    return 'Dto';
  }
}
