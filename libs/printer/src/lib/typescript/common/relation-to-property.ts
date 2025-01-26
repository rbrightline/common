import { BasicPropertyOptions, RelationOptions } from '@rline/type';
import { clone } from './clone';

export function relationToProperty<
  P extends BasicPropertyOptions,
  R extends RelationOptions
>(options: R): P {
  options = clone(options);

  const type = options.type.endsWith('many') ? 'array' : 'object';

  if (type == 'array') {
    return {
      name: options.name,
      type: 'array',
      items: { type: 'object', target: 'IDDto' },
    } as P;
  } else if (type == 'object') {
    return {
      name: options.name,
      type: 'object',
      target: 'IDDto',
    } as P;
  }

  throw new Error('could not transform relation to property options!');
}
