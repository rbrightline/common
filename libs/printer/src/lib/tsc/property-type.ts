import { sval } from '@rline/is';
import { NotImplementedError, PropertyOptions } from '@rline/type';

/**
 * get the property type
 * @param property
 */
export function propertyType(property: PropertyOptions): string | never {
  sval(property.type);
  switch (property.type) {
    case 'string':
    case 'number':
    case 'boolean':
      return property.type;

    case 'date':
      return 'Date';
    case 'array': {
      sval(property.items);
      return `${propertyType(property.items)}[]`;
    }
    case 'integer':
      return 'mumber';
    case 'object':
      sval(property.target);
      return property.target;
  }
  throw new NotImplementedError();
}
