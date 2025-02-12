import { def, ne, rval } from '@rline/is';
import { PropertyValidationOptions } from '@rline/type';
import { Type as ClasType } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  Contains,
  IsAlphanumeric,
  IsArray,
  IsBase64,
  IsBoolean,
  IsCreditCard,
  IsDate,
  IsEmail,
  IsHash,
  IsHexadecimal,
  IsInt,
  IsIP,
  IsISBN,
  IsISSN,
  IsJSON,
  IsJWT,
  IsMACAddress,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsPhoneNumber,
  IsPostalCode,
  IsSemVer,
  IsString,
  IsStrongPassword,
  IsTimeZone,
  IsUrl,
  IsUUID,
  Length,
  Matches,
  Max,
  MaxLength,
  Min,
  MinLength,
  NotContains,
  ValidateNested,
  ValidationOptions,
} from 'class-validator';
import {
  BooleanString,
  DateString,
  IntString,
  NumberString,
  ObjectString,
} from './transformer';

/**
 * Property validation decorator
 * @param options {@link PropertyValidationOptions}
 * @param validationOptions {@link ValidationOptions}
 * @returns
 */
export function PropertyValidation(
  options: Partial<PropertyValidationOptions>,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return (t, p) => {
    const { type, required, acceptString } = options;
    const vo = validationOptions;

    if (required === true) {
      IsNotEmpty(vo)(t, p);
    } else {
      IsOptional(vo)(t, p);
    }

    PropertyTypeSwitch: switch (type) {
      case 'string': {
        IsString(vo)(t, p);
        const {
          minLength,
          maxLength,
          stringFormat,
          contains,
          notContains,
          startWith,
          endWith,
        } = options;

        if (def(minLength)) MinLength(minLength, vo)(t, p);
        if (def(maxLength)) MaxLength(maxLength, vo)(t, p);

        if (def(startWith))
          Matches(new RegExp(`/^${startWith}/`), {
            ...vo,
            message: `$property should start with ${startWith}`,
          })(t, p);

        if (def(endWith))
          Matches(new RegExp(`/${endWith}$/`), {
            ...vo,
            message: `$property should end with ${endWith}`,
          })(t, p);

        if (def(contains) && ne(contains)) {
          contains.forEach((e: string) => {
            Contains(e, vo)(t, p);
          });
        }

        if (def(notContains) && ne(notContains)) {
          notContains.forEach((e: string) => {
            NotContains(e, vo)(t, p);
          });
        }

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

            case 'ipv4':
              IsIP('4', vo)(t, p);
              break;

            case 'ipv6':
              IsIP('6', vo)(t, p);
              break;

            case 'alphanumeric':
              IsAlphanumeric(undefined, vo)(t, p);
              break;

            case 'base64':
              IsBase64(undefined, vo)(t, p);
              break;

            case 'binary':
              Matches(/^[0-1]{1,}$/, {
                ...vo,
                message: '$property must contain only 1 and 0.',
              })(t, p);
              break;

            case 'zipcode':
              IsPostalCode('US', vo)(t, p);
              break;

            case 'credit-card':
              IsCreditCard(vo)(t, p);
              break;

            case 'currency': {
              IsNumber({}, vo)(t, p);
              Min(0, vo)(t, p);
              Max(0, vo)(t, p);
              break;
            }

            case 'date-time':
            case 'time':
            case 'date':
              IsDate(vo)(t, p);
              break;
            case 'short':
              Length(0, 100, vo)(t, p);
              break;
            case 'long':
              Length(0, 1000, vo)(t, p);
              break;
            case 'subdomain':
            case 'hostname':
            case 'domain-name':
              IsUrl(
                {
                  allow_fragments: false,
                  allow_protocol_relative_urls: false,
                  allow_query_components: false,
                },
                vo
              )(t, p);
              break;
            case 'uuid':
              IsUUID('4', vo)(t, p);
              break;
            case 'url':
              IsUrl(undefined, vo)(t, p);
              break;
            case 'uri':
            case 'uri-reference':
              IsUrl(undefined, vo)(t, p);
              break;
            case 'iri':
            case 'iri-reference':
            case 'regex':
              break;

            case 'isbn':
              IsISBN(undefined, vo)(t, p);
              break;
            case 'issn':
              IsISSN(undefined, vo)(t, p);
              break;
            case 'postal-code':
              IsPostalCode(undefined, vo)(t, p);
              break;
            case 'mac-address':
              IsMACAddress(undefined, vo)(t, p);
              break;
            case 'hexadecimal':
              IsHexadecimal(vo)(t, p);
              break;
            case 'json':
              IsJSON(vo)(t, p);
              break;
            case 'slug':
              break;
            case 'username':
              IsEmail(undefined, vo)(t, p);
              break;
            case 'country-code':
              break;
            case 'language-code':
            case 'timezone':
              IsTimeZone(vo)(t, p);
              break;
            case 'html-color':
              break;
            case 'semver':
              IsSemVer(vo)(t, p);
              break;

            case 'file-path':
              break;
            case 'sha512':
              IsHash('sha512', vo)(t, p);
              break;
            case 'sha256':
              IsHash('sha256', vo)(t, p);
              break;
            case 'md5':
              IsHash('md5', vo)(t, p);
              break;
            case 'jwt':
              IsJWT(vo)(t, p);
              break;
            case 'object-id':
              break;
            default:
              break StringFormatSwitch;
          }
        }

        break PropertyTypeSwitch;
      }
      case 'integer':
      case 'number': {
        if (type === 'integer') {
          IsInt(vo)(t, p);
          if (acceptString === true) IntString(vo)(t, p);
        } else {
          IsNumber(undefined, vo)(t, p);
          if (acceptString === true) NumberString(vo)(t, p);
        }

        const { minimum, maximum } = options;

        if (def(minimum)) Min(minimum, vo)(t, p);

        if (def(maximum)) Max(maximum, vo)(t, p);

        break PropertyTypeSwitch;
      }
      case 'array': {
        IsArray()(t, p);

        PropertyValidation(rval(options.items), { each: true })(t, p);

        const { minSize, maxSize } = options;

        if (def(minSize)) ArrayMinSize(minSize)(t, p);
        if (def(maxSize)) ArrayMaxSize(maxSize)(t, p);

        break PropertyTypeSwitch;
      }
      case 'boolean': {
        IsBoolean(vo)(t, p);

        if (acceptString === true) BooleanString(vo)(t, p);
        break PropertyTypeSwitch;
      }
      case 'date': {
        IsDate(vo)(t, p);
        if (acceptString === true) DateString(vo)(t, p);
        break PropertyTypeSwitch;
      }
      case 'object': {
        IsObject(vo)(t, p);

        if (acceptString === true) ObjectString(vo)(t, p);

        ValidateNested(vo)(t, p);
        ClasType(options.target)(t, p);
        break PropertyTypeSwitch;
      }
    }
  };
}
