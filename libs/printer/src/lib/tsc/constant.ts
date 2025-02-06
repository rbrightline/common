import { tstr, ValueType } from '@rline/is';
import { names } from '@rline/names';
import { Printable } from '../common';

export class ConstantPrinter implements Printable {
  constructor(
    protected readonly name: string,
    protected readonly value: ValueType
  ) {}

  print(): string {
    const value = tstr(this.value) ? `'${this.value}'` : this.value;
    const name = names(this.name).constCase;

    return `export const ${name} = ${value};`;
  }
}
