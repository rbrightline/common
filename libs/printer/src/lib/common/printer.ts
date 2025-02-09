import { NotImplementedError } from '@rline/type';
import { Printable } from './printable';

export class Printer<T> implements Printable {
  constructor(protected readonly options: T) {}

  print(options?: string): string {
    throw new NotImplementedError();
  }
}
