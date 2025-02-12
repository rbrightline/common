import { Type } from '../common';
import { PropertyOptions } from './model.schema';

/**
 * Property validation options
 */
export type PropertyValidationOptions<
  T extends PropertyOptions = PropertyOptions
> = Partial<
  T extends { type: 'object' }
    ? Omit<T, 'target'> & { target: () => Type<any> }
    : T extends { type: 'array' }
    ? Omit<T, 'items'> & { items: Partial<PropertyValidationOptions> }
    : T
>;
