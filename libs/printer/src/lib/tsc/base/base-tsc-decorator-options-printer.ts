import { PropertyOptions } from '@rline/type';
import { DecoratorOptionsPrinter } from 'src/lib/printer';

export class BaseTscDecoratorOptionsPrinter extends DecoratorOptionsPrinter<PropertyOptions> {
  protected override opening(): string {
    return '';
  }

  protected override closing(): string {
    return '';
  }

  protected override parseOptions(): string {
    return JSON.stringify(this.options);
  }

  override print(): string {
    return [this.opening(), this.parseOptions(), this.closing()].join('');
  }
}
