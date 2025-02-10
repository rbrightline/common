import {
  ApiProperty as __ApiProperty,
  ApiPropertyOptions,
} from '@nestjs/swagger';
import { PropertyValidationOptions } from '@rline/validation';

/**
 * Swagger options decroator
 * @param options
 * @returns
 */
export function ApiProperty(
  options: PropertyValidationOptions
): PropertyDecorator {
  return (t, p) => {
    __ApiProperty(options as ApiPropertyOptions)(t, p);
  };
}
