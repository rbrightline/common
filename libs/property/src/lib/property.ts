import {
  PropertyValidation,
  PropertyValidationOptions,
} from '@rline/validation';
import { ApiProperty } from './api-property';

export function Property(
  options: PropertyValidationOptions
): PropertyDecorator {
  return (t, p) => {
    ApiProperty(options)(t, p);
    PropertyValidation(options)(t, p);
  };
}
