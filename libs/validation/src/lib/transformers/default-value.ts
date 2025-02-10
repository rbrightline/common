import { def, udef } from '@rline/is';
import { PropertyOptions } from '@rline/type';
import { Transform } from 'class-transformer';

export function DefaultValueTransformer(
  options: PropertyOptions
): PropertyDecorator {
  return (t, p) => {
    if (def(options.default)) {
      Transform(({ value }) => {
        if (udef(value)) return options.default;

        return value;
      })(t, p);
    }
  };
}
