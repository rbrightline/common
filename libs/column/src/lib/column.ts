import { def } from '@rline/is';
import { Property } from '@rline/property';
import { PropertyValidationOptions } from '@rline/type';
import { ColumnOptions, Column as TColumn } from 'typeorm';

export function Column(options: PropertyValidationOptions): PropertyDecorator {
  return (t, p) => {
    Property(options)(t, p);

    const tOptions: ColumnOptions = {
      nullable: options.required != true,
      unique: options.unique,
      update: options.update,
    };
    const type = options.type;
    switch (type) {
      case 'string':
        TColumn({ type: 'varchar', ...tOptions })(t, p);
        break;
      case 'number':
        TColumn({ type: 'numeric', ...tOptions })(t, p);
        break;
      case 'integer':
        TColumn({ type: 'integer', ...tOptions })(t, p);
        break;
      case 'boolean':
        TColumn({ type: 'boolean', ...tOptions })(t, p);
        break;
      case 'date':
        TColumn({ type: 'timestamp', ...tOptions })(t, p);
        break;
      case 'object':
        TColumn({
          type: 'varchar',
          ...tOptions,
          transformer: {
            to(value) {
              if (def(value)) {
                return JSON.stringify(value);
              }
              return value;
            },
            from(value) {
              if (def(value)) {
                return JSON.parse(value);
              }
              return value;
            },
          },
        })(t, p);
        break;
      case 'array':
        TColumn({
          type: 'varchar',
          ...tOptions,
          transformer: {
            to(value) {
              if (def(value)) {
                return JSON.stringify(value);
              }
              return value;
            },
            from(value) {
              if (def(value)) {
                return JSON.parse(value);
              }
              return value;
            },
          },
        })(t, p);
        break;
    }
  };
}
