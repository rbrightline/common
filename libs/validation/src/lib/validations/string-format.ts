import { def } from '@rline/is';
import { StringFormat } from '@rline/type';
import { MaxLength, ValidationOptions } from 'class-validator';

export function StringFormatValidation(
  format: StringFormat,
  vo: ValidationOptions
): PropertyDecorator {
  return (t, p) => {
    if (def(format))
      switch (format) {
        case 'short': {
          MaxLength(100, vo)(t, p);
          return;
        }
        case 'long': {
          MaxLength(1000, vo)(t, p);
          return;
        }
        case 'base64':
        case 'alphanumeric':
        // Add the rest of it
      }
  };
}
