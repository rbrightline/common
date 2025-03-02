import { PropertyValidationOptions } from '@rline/type';
import { PropertyValidation } from '@rline/validation';
import { Exclude, Expose } from 'class-transformer';
import { ApiProperty } from './api-property';

/**
 * Dto class decorator
 * @returns
 */
export function Dto(): ClassDecorator {
  return (t) => {
    Exclude()(t);
  };
}

/**
 * DTO property decorator
 * @param options
 * @returns
 */
export function Property(
  options: Partial<PropertyValidationOptions>
): PropertyDecorator {
  return (t, p) => {
    Expose()(t, p);
    ApiProperty(options)(t, p);
    PropertyValidation(options)(t, p);
  };
}
