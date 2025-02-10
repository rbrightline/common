import { def, tnbr, tobj, tstr } from '@rline/is';
import { Transform } from 'class-transformer';
import { ValidationOptions } from 'class-validator';

export function BooleanString(
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return (t, p) => {
    if (validationOptions?.each == true) return;

    Transform(({ value }) => {
      if (def(value))
        if (value === 'true') {
          return true;
        } else if (value === 'false') {
          return false;
        }
      return value;
    })(t, p);
  };
}

export function IntString(
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return (t, p) => {
    if (validationOptions?.each == true) return;

    Transform(({ value }) => {
      if (tstr(value) && def(value)) {
        const r = parseInt(value);
        if (tnbr(r)) return r;
        return value;
      }
      return value;
    })(t, p);
  };
}

export function NumberString(
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return (t, p) => {
    if (validationOptions?.each == true) return;

    Transform(({ value }) => {
      if (tstr(value) && def(value)) {
        const r = parseFloat(value);
        if (tnbr(r)) return r;
        return value;
      }
      return value;
    })(t, p);
  };
}

export function ObjectString(
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return (t, p) => {
    if (validationOptions?.each == true) return;

    Transform(({ value }) => {
      if (tstr(value) && def(value)) {
        try {
          const r = JSON.parse(value);
          if (tobj(r)) return r;
        } catch {
          return value;
        }
      }
      return value;
    })(t, p);
  };
}
