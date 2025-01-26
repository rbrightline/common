import { BasicPropertyOptions, ObjectBasicPropertyOptions } from '@rline/type';
import { clone } from './clone';

/**
 * Convert the schema property type into typescript type
 * @param options
 * @returns
 */
export function parsePropertyType(options: BasicPropertyOptions): string {
  options = clone(options);
  if (options.type == 'string') {
    return 'string';
  } else if (options.type == 'boolean') {
    return 'boolean';
  } else if (options.type == 'date') {
    return 'Date';
  } else if (options.type == 'integer' || options.type === 'number') {
    return 'number';
  } else if (options.type == 'object') {
    return (options as ObjectBasicPropertyOptions).target;
  } else if (options.type == 'array') {
    return `${parsePropertyType(options.items)}[]`;
  }
  return 'unkown';
}
