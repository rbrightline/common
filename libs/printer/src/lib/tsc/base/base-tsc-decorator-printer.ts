import { ne } from '@rline/is';
import { DecoratorPrinter } from 'src/lib/printer';

export class BaseTscDecoratorPrinter extends DecoratorPrinter {
  protected override decoratorSymbol(): string {
    return '@';
  }

  protected override opening(): string {
    return '(';
  }

  protected override closing(): string {
    return ')';
  }

  protected override decoratorName(): string {
    return this.options.name;
  }

  override print(options?: string): string {
    return [
      this.decoratorSymbol(),
      this.decoratorName(),
      this.opening(),
      options,
      this.closing(),
    ]
      .filter(ne)
      .join('');
  }
}
