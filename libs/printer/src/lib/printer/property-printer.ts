import { NotImplementedError } from '@rline/type';
import { Printer } from '../common';
export type PropertyPrinterOptions = {
  name: string;
};

export class PropertyPrinter<
  T extends PropertyPrinterOptions = PropertyPrinterOptions
> extends Printer<T> {
  /**
   * print default value
   */
  protected defaultValue(): string {
    throw new NotImplementedError();
  }

  /**
   * type and value sperator if any
   */
  protected seperator(): string {
    throw new NotImplementedError();
  }

  /**
   * Access modifier such as private, protected, or public
   */
  protected accessModifier(): string {
    throw new NotImplementedError();
  }

  /**
   * Asignment symbol such as "="
   */
  protected asignment(): string {
    throw new NotImplementedError();
  }

  /**
   * Type of the property such as string, number, boolean
   */
  protected type(): string {
    throw new NotImplementedError();
  }

  /**
   * property name
   */
  protected propertyName(): string {
    throw new NotImplementedError();
  }

  /**
   * decleration
   */
  protected decleration(): string {
    throw new NotImplementedError();
  }

  /**
   * end of line such as ";"
   */
  protected eol() {
    throw new NotImplementedError();
  }
}
