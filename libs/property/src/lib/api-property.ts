import {
  ApiProperty as __ApiProperty,
  ApiPropertyOptions,
} from '@nestjs/swagger';
import { PropertyValidationOptions } from '@rline/validation';

export function ApiProperty(
  options: PropertyValidationOptions
): PropertyDecorator {
  return (t, p) => {
    __ApiProperty(options as ApiPropertyOptions)(t, p);
  };
}
