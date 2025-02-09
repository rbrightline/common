import { def, ne, tobj, tstr } from '@rline/is';
import {
  InvalidPropertyTypeError,
  PickRequired,
  PropertyOptions,
} from '@rline/type';
import { PropertyPrinter } from '../../printer';

export class BaseTscPropertyPrinter extends PropertyPrinter<
  PickRequired<PropertyOptions, 'name'>
> {
  constructor(options: PickRequired<PropertyOptions, 'name'>) {
    super(options);
  }

  protected override accessModifier(): string {
    return '';
  }

  protected override asignment(): string {
    return '=';
  }

  protected override propertyName(): string {
    return this.options.name;
  }

  protected override seperator(): string {
    return ':';
  }

  protected override defaultValue(): string {
    if (def(this.options.default)) {
      if (tstr(this.options.default)) {
        return `'${this.options.default}'`;
      } else if (tobj(this.options.default)) {
        return JSON.stringify(this.options.default);
      }
      return this.options.default;
    }
    return '';
  }

  protected override type(options?: PropertyOptions): string {
    const o = options ?? this.options;
    const t = o.type;

    switch (t) {
      case 'string':
      case 'number':
      case 'boolean':
        return t;
      case 'integer':
        return 'number';

      case 'date':
        return 'Date';
      case 'object':
        return o.target;
      case 'array':
        return this.type(o.items);
    }
    throw new InvalidPropertyTypeError();
  }

  protected override decleration(): string {
    return [
      this.accessModifier(),
      [this.propertyName(), this.seperator()].filter(ne).join(''),
      this.type(),
    ]
      .filter(ne)
      .join(' ');
  }

  protected override eol(): string {
    return ';';
  }

  override print(): string {
    if (ne(this.defaultValue())) {
      return [
        [this.decleration(), this.asignment(), this.defaultValue()]
          .filter(ne)
          .join(' '),
        this.eol(),
      ].join('');
    }
    return [this.decleration() + this.eol()].filter(ne).join('');
  }
}
