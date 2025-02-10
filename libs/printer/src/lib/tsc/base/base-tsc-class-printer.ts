import { ne } from '@rline/is';
import { ClassPrinter, ClassPrinterOptions } from '../../printer';

export class BaseTscClassPrinter<
  T extends ClassPrinterOptions = ClassPrinterOptions
> extends ClassPrinter<T> {
  protected override asignment(): string {
    return '';
  }
  protected override className(): string {
    return this.options.name;
  }

  protected override closing(): string {
    return '}';
  }

  protected override exporting(): string {
    return 'export';
  }

  protected override extendings(): string {
    return '';
  }

  protected override generics(): string {
    return '';
  }

  protected override implements(): string {
    return '';
  }

  protected override opening(): string {
    return '{';
  }

  protected override type(): string {
    return 'class';
  }

  protected override decleration(): string {
    return [
      this.exporting(),
      this.type(),
      this.className(),
      this.extendings(),
      this.implements(),
      this.asignment(),
    ]
      .filter(ne)
      .join(' ');
  }

  override print(properties = ''): string {
    return [this.decleration(), this.opening(), properties, this.closing()]
      .filter(ne)
      .join(' ');
  }
}
