import { NotImplementedError } from '@rline/type';
import { Printable } from '../common';

export class DecoratorOptionsPrinter<T> implements Printable {
  constructor(protected readonly options: T) {}

  protected parseOptions(): string {
    throw new NotImplementedError();
  }

  protected opening(): string {
    throw new NotImplementedError();
  }

  protected closing(): string {
    throw new NotImplementedError();
  }

  print(): string {
    throw new NotImplementedError();
  }
}
