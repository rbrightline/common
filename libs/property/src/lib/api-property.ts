import {
  ApiProperty as __ApiProperty,
  ApiPropertyOptions,
} from '@nestjs/swagger';
import { PropertyValidationOptions } from '@rline/type';

/**
 * Swagger options decroator
 * @param options
 * @returns
 */
export function ApiProperty(
  options: Partial<PropertyValidationOptions>
): PropertyDecorator {
  return (t, p) => {
    let __options: ApiPropertyOptions = {};

    if (options.type === 'object') {
      const { target, ...rest } = options;
      __options = { ...rest } as ApiPropertyOptions;
    } else if (options.type === 'array' && options.items?.type === 'object') {
      const { items, ...rest } = options;
      const { target, ...restITems } = items;
      __options = { ...rest, items: { ...restITems } as any };
    } else {
      __options = options as ApiPropertyOptions;
    }
    __ApiProperty(__options)(t, p);
  };
}
