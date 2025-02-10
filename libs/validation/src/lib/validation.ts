import { def } from '@rline/is';
import { PropertyOptions, Type } from '@rline/type';
import { Type as ClasType } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsDate,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
  Max,
  MaxLength,
  Min,
  MinLength,
  ValidateNested,
  ValidationOptions,
} from 'class-validator';
import {
  BooleanString,
  IntString,
  NumberString,
  ObjectString,
} from './transformer';

/**
 * Property validation options
 */
export type PropertyValidationOptions<
  T extends PropertyOptions = PropertyOptions
> = T extends { type: 'object' }
  ? Omit<T, 'target'> & { target: () => Type<any> }
  : T extends { type: 'array' }
  ? Omit<T, 'items'> & { items: PropertyValidationOptions }
  : T;

/**
 * Property validation decorator
 * @param options {@link PropertyValidationOptions}
 * @param validationOptions {@link ValidationOptions}
 * @returns
 */
export function PropertyValidation(
  options: PropertyValidationOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return (t, p) => {
    const { type, required } = options;
    const vo = validationOptions;
    if (required === true) {
      IsNotEmpty(vo)(t, p);
    } else {
      IsOptional(vo)(t, p);
    }

    PropertyTypeSwitch: switch (type) {
      case 'string': {
        IsString(vo)(t, p);
        const { minLength, maxLength, stringFormat } = options;
        if (def(minLength)) MinLength(minLength, vo)(t, p);
        if (def(maxLength)) MaxLength(maxLength, vo)(t, p);

        if (def(stringFormat)) {
          StringFormatSwitch: switch (stringFormat) {
            case 'email':
              IsEmail(undefined, vo)(t, p);
              break StringFormatSwitch;
            case 'phone-number':
              IsPhoneNumber(undefined, vo)(t, p);
              break StringFormatSwitch;
            case 'password':
              IsStrongPassword(undefined, vo)(t, p);
              break StringFormatSwitch;

            // - [ ] Add other string format validations
            default:
              break StringFormatSwitch;
          }
        }

        break PropertyTypeSwitch;
      }
      case 'integer':
      case 'number': {
        if (type === 'integer') {
          IsInt(vo);
          if (options.acceptString === true) IntString(vo)(t, p);
        } else {
          IsNumber(undefined, vo)(t, p);
          if (options.acceptString === true) NumberString(vo)(t, p);
        }

        const { minimum, maximum } = options;

        if (def(minimum)) Min(minimum, vo)(t, p);
        if (def(maximum)) Max(maximum, vo)(t, p);

        // - [ ] add other number validations

        break PropertyTypeSwitch;
      }
      case 'array': {
        IsArray()(t, p);
        PropertyValidation(options.items, { each: true })(t, p);

        const { minSize, maxSize } = options;

        if (def(minSize)) ArrayMinSize(minSize)(t, p);
        if (def(maxSize)) ArrayMaxSize(maxSize)(t, p);

        break PropertyTypeSwitch;
      }
      case 'boolean': {
        IsBoolean(vo)(t, p);
        const { acceptString } = options;
        if (acceptString === true) BooleanString(vo)(t, p);
        break PropertyTypeSwitch;
      }
      case 'date': {
        IsDate(vo)(t, p);
        break PropertyTypeSwitch;
      }
      case 'object': {
        IsObject(vo)(t, p);

        const { acceptString } = options;
        if (acceptString === true) ObjectString(vo)(t, p);

        ValidateNested(vo)(t, p);
        ClasType(options.target)(t, p);
        break PropertyTypeSwitch;
      }
    }
  };
}
