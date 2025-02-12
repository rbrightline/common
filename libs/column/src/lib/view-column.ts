import { Property } from '@rline/property';
import { PropertyValidationOptions } from '@rline/type';
import { ViewColumn as TViewColumn } from 'typeorm';

export function ViewColumn(
  options: PropertyValidationOptions
): PropertyDecorator {
  return (t, p) => {
    Property(options)(t, p);
    TViewColumn()(t, p);
  };
}
