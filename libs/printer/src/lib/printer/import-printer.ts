import { NotImplementedError } from '@rline/type';

export abstract class ImportPrinter {
  /**
   * opening symbol such as "{"
   */
  protected opening(): string {
    throw new NotImplementedError();
  }

  /**
   * closing symbol such as "{"
   */
  protected closing(): string {
    throw new NotImplementedError();
  }

  /**
   * import keyword such us 'import'
   */
  protected importKeyword(): string {
    throw new NotImplementedError();
  }

  /**
   * from keyword such as 'from'
   */
  protected fromKeyword(): string {
    throw new NotImplementedError();
  }
  /**
   * print packagename
   */
  protected packageName(): string {
    throw new NotImplementedError();
  }

  /**
   * imported items
   */
  protected items(): string {
    throw new NotImplementedError();
  }

  protected eol(): string {
    throw new NotImplementedError();
  }

  print(): string {
    throw new NotImplementedError();
  }
}
