import { Property } from '@rline/property';
import { RelationColumnOptions } from '@rline/type';
import {
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  RelationOptions,
} from 'typeorm';

export function Relation(options: RelationColumnOptions): PropertyDecorator {
  return (t, p) => {
    const type = options.type;
    const rOptions: RelationOptions = {
      cascade: options.cascade,
      eager: options.eager,
      nullable: options.required != true,
      onDelete: options.onDelete,
      onUpdate: options.onUpdate,
    };

    switch (type) {
      case 'many-to-many': {
        ManyToMany(options.target, (e) => e.id, { ...rOptions })(t, p);
        Property({
          type: 'array',
          items: { type: 'object', target: options.target },
        })(t, p);
        break;
      }
      case 'many-to-one': {
        ManyToOne(options.target, (e) => e.id, { ...rOptions })(t, p);
        Property({ type: 'object', target: options.target })(t, p);
        break;
      }
      case 'one-to-one': {
        OneToOne(options.target, (e) => e.id, { ...rOptions })(t, p);
        Property({ type: 'object', target: options.target })(t, p);
        break;
      }
      case 'one-to-many': {
        OneToMany(options.target, (e) => e.id, { ...rOptions })(t, p);
        Property({
          type: 'array',
          items: { type: 'object', target: options.target },
        })(t, p);
        break;
      }
    }

    if (options.join == true) {
      switch (type) {
        case 'many-to-many':
        case 'one-to-many':
          JoinTable()(t, p);
          break;
        case 'many-to-one':
        case 'one-to-one':
          JoinColumn()(t, p);
          break;
      }
    }
  };
}
