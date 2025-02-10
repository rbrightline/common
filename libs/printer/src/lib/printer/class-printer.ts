import { NotImplementedError } from '@rline/type';
import { Printable } from '../common';

export type ClassPrinterOptions = {
  /**
   * class name
   */
  name: string;
};

export abstract class ClassPrinter<
  T extends ClassPrinterOptions = ClassPrinterOptions
> implements Printable
{
  constructor(protected readonly options: T) {}
  /**
   * print the export keyword
   */
  protected exporting(): string {
    throw new NotImplementedError();
  }

  /**
   * print the implementing state X implements A, B, C, D
   */
  protected implements(): string {
    throw new NotImplementedError();
  }

  /**
   * print the genertic types C<A, B, C>
   */
  protected generics(): string {
    throw new NotImplementedError();
  }

  /**
   * print the extendding state X extends A, B, C
   */
  protected extendings(): string {
    throw new NotImplementedError();
  }

  /**
   * print the asignment keyword X = Or empty
   */
  protected asignment(): string {
    throw new NotImplementedError();
  }

  /**
   * print openning symbol such as "{"
   */
  protected opening(): string {
    throw new NotImplementedError();
  }

  /**
   * print closing symbol such as "}"
   */
  protected closing(): string {
    throw new NotImplementedError();
  }

  /**
   * Print class type such as type, interface, or class
   * @returns
   */
  protected type(): string {
    throw new NotImplementedError();
  }

  /**
   * print the class name
   */
  protected className(): string {
    throw new NotImplementedError();
  }

  /**
   * print the decleration
   */
  protected decleration(): string {
    throw new NotImplementedError();
  }

  /**
   * Print the class/interface/type
   * @param properties
   */
  print(properties?: string): string {
    throw new NotImplementedError();
  }
}
