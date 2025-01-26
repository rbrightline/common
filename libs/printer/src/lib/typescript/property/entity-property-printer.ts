import { BasicPropertyOptions } from '@rline/type';
import { BasePropertyPrinter } from './base-property-printer';

export class EntityPropertyPrinter<
  T extends BasicPropertyOptions
> extends BasePropertyPrinter<T> {
  constructor(options: T) {
    super(options);
  }

  override pickDecoratorOptionProperties(): (keyof T)[] {
    return [
      'type',
      'unique',
      'required',
      'update',
      'hash',
      'encrypt',
      'generated',
    ];
  }
  override decoratorName(): string {
    return 'Column';
  }
}
