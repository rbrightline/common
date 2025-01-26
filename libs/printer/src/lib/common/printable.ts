import { BasicPropertyOptions } from '@rline/type';

export interface Printable {
  print(): string;
}

export interface PrintableProperty extends Printable {
  type(): string;
  decoratorName(): string;
  decoratorOptions(): string;
  decoratorDefinition(): string;
  comment(): string;
  definition(): string;
  isRequired(): string;
}

export interface PrintableClass<P extends BasicPropertyOptions>
  extends Printable {
  imports(): string;
  name(): string;
  type(): string;
  decoratorName(): string;
  decoratorOptions(): string;
  decoratorDefinition(): string;
  generics(): string;
  extendings(): string;
  implementings(): string;
  properties(): string;
  printProperty(options: P): string;
}
