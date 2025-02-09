import { Printable } from '../common';

export class DecoratorOptionsPrinter<T> implements Printable {
  constructor(protected readonly options: T) {}
  print(): string {
    return '';
  }
}
