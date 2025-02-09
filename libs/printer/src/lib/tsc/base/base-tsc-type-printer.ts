import { ne } from '@rline/is';
import { BaseTscClassPrinter } from './base-tsc-class-printer';

export class BaseTscTypePrinter extends BaseTscClassPrinter {
  protected override asignment(): string {
    return '=';
  }

  protected override type(): string {
    return 'type';
  }

  protected override decleration(): string {
    return [this.exporting(), this.type(), this.className(), this.generics()]
      .filter(ne)
      .join(' ');
  }

  override print(properties: string): string {
    return [
      this.decleration(),
      this.asignment(),
      this.opening(),
      properties,
      this.closing(),
    ]
      .filter(ne)
      .join(' ');
  }
}
