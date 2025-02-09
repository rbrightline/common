import { ne } from '@rline/is';
import { ImportPrinter } from '../../printer';

export class BaseTscImportPrinter extends ImportPrinter {
  protected override importKeyword(): string {
    return 'import';
  }

  protected override fromKeyword(): string {
    return 'from';
  }

  protected override opening(): string {
    return '{';
  }

  protected override closing(): string {
    return '}';
  }

  protected override eol(): string {
    return ';';
  }

  override print(items?: string): string {
    if (ne(items)) {
      return [
        [
          this.importKeyword(),
          this.opening(),
          items,
          this.closing(),
          this.fromKeyword(),
          this.packageName(),
        ]
          .filter(ne)
          .join(' '),
        this.eol(),
      ]
        .filter(ne)
        .join('');
    }
    return '';
  }
}
