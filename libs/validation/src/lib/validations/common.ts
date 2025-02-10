import { def } from '@rline/is';
import { PropertyOptions } from '@rline/type';
import { IsNotEmpty, IsOptional, ValidationOptions } from 'class-validator';
import { DefaultValueTransformer } from '../transformers';

export function CommonValidation(
  options: PropertyOptions,
  vo: ValidationOptions
): PropertyDecorator {
  return (t, p) => {
    if (options.required == true) {
      IsNotEmpty(vo)(t, p);
    } else {
      IsOptional(vo)(t, p);
    }

    if (def(options.default)) DefaultValueTransformer(options)(t, p);
  };
}
