import { NotImplementedError } from '@rline/type';
import { Printable } from '../common';

export type DecoratorPrinterOptions = {
  name: string;
};

export abstract class DecoratorPrinter<
  T extends DecoratorPrinterOptions = DecoratorPrinterOptions
> implements Printable
{
  constructor(protected readonly options: T) {}

  /**
   * opening symbol such as "("
   */
  protected opening(): string {
    throw new NotImplementedError();
  }

  /**
   * closing symbol such as ")"
   */
  protected closing(): string {
    throw new NotImplementedError();
  }

  protected decoratorSymbol(): string {
    throw new NotImplementedError();
  }
  protected decoratorName(): string {
    throw new NotImplementedError();
  }

  print(options?: string): string {
    throw new NotImplementedError();
  }
}
