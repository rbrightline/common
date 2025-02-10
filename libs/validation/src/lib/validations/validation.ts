import { PropertyOptions } from '@rline/type';
import { ValidationOptions } from 'class-validator';
import { CommonValidation } from './common';

export function PropertyValidation(
  options: PropertyOptions
): PropertyDecorator {
  return (t, p) => {
    const vo: ValidationOptions = { each: options.type == 'array' };
    CommonValidation(options, vo)(t, p);
  };
}
