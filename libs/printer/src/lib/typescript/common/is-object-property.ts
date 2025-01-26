import { BasicPropertyOptions } from '@rline/type';

export function isAnyObjectProperty(options: BasicPropertyOptions) {
  return (
    options.type == 'object' ||
    (options.type == 'array' && options.items.type == 'object')
  );
}

export function isObjectProperty<T extends BasicPropertyOptions>(
  options: T
): options is T & { type: 'object' } {
  return options.type == 'object';
}
export function isArrayObjectProperty<T extends BasicPropertyOptions>(
  options: T
): options is T & { type: 'array'; items: { type: 'object' } } {
  return options.type === 'array' && options.items.type == 'object';
}
