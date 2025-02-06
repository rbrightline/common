import { ModelSchema, NotImplementedError, PropertyOptions } from '@rline/type';
import { Printable } from './printable';

export class Printer<T extends ModelSchema | PropertyOptions>
  implements Printable
{
  constructor(protected readonly options: T) {}

  print(): string {
    throw new NotImplementedError();
  }
}
