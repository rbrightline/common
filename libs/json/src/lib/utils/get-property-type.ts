import { names } from '@nx/devkit';
import { JSONSchema } from '../type';

export function getPropertyType(options?: JSONSchema): string {
  if (!options) return 'null';

  if (options.type)
    switch (options.type) {
      case 'array': {
        return `${getPropertyType(options.items as JSONSchema)}[]`;
      }
      case 'boolean':
        return 'boolean';
      case 'integer':
      case 'number':
        return 'number';
      case 'object':
        return options.title ?? 'unkown';
      case 'string':
        return 'string';
      case 'null':
        return 'null | undefined';
    }

  if (options.$ref) {
    if (options.$ref.startsWith('#/definitions')) {
      return options.$ref.split('/').pop()!;
    } else {
      const fileName = options.$ref
        .split('/')
        .pop()
        ?.replace('.schema.json', '')
        .split('/')
        .pop();

      if (fileName) {
        return names(fileName).className;
      }
    }
  }

  return 'unkown';
}
