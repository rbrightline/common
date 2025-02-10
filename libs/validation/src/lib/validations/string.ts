import { def } from '@rline/is';
import { StringOptions } from '@rline/type';
import { IsString, MinLength, ValidationOptions } from 'class-validator';
import { StringFormatValidation } from './string-format';

export function StringValidation(
  options: StringOptions,
  vo: ValidationOptions
): PropertyDecorator {
  return (t, p) => {
    IsString(vo)(t, p);

    const {
      minLength,
      maxLength,
      stringFormat,
      //   containProperty,
      //   notContainProperty,
      //   dependsOn,
      //   equalToProperty,
      //   notEndWith,
      //   contains,
      //   notContains,
      //   isIn,
      //   isNotIn,
      //   longerThanProperty,
      //   notEqualToProperty,
      //   shorterThanProperty,
      //   endWith,
      //   startWith,
      //   notStartWith,
    } = options;

    if (def(minLength)) MinLength(minLength, vo)(t, p);
    if (def(maxLength)) MinLength(maxLength, vo)(t, p);
    if (def(stringFormat)) StringFormatValidation(stringFormat, vo)(t, p);
  };
}
