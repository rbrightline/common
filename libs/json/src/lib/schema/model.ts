export type ModelName = 'Task' | 'TaskComment' | 'Sprint';
export type PropertyName = 'phones' | 'website' | 'websites';
export type PropertyOptions =
  | (CommonPropertyOptions & UIPropertyOptions & StringPropertyOptions)
  | NumberPropertyOptions
  | IntegerPropertyOptions
  | BooleanPropertyOptions
  | DatePropertyOptions
  | ObjectPropertyOptions
  | ArrayPropertyOptions;
export type RelationPropertyOptions = UIPropertyOptions & {
  name: PropertyName;
  type: RelationType;
  target: ModelName;
  targetProperty: PropertyName;
  eager: boolean;
  join: boolean;
  cascade: boolean;
  onDelete: OnDelete;
  onUpdate: OnUpdate;
};
export type CommonPropertyOptions = General &
  Transform &
  Validation &
  Encryption &
  Dto;
export type UIPropertyOptions = {
  label: string;
  mapTo: PropertyName;
  inputType: InputType;
  prefixText: string;
  suffixText: string;
  prefixIcon: Icon;
  suffixIcon: Icon;
  dependsOn: PropertyName;
  group: string;
  bold: boolean;
  italic: boolean;
};
export type StringPropertyOptions = {
  type: 'string';
  default: string;
  stringFormat: StringFormat;
  minLength: number;
  maxLength: number;
  isIn: string[];
  isNotIn: string[];
  contains: string[];
  notContains: string[];
  startWith: string;
  notStartWith: string;
  endWith: string;
  notEndWith: string;
  containProperty: PropertyName;
  notContainProperty: PropertyName;
  longerThanProperty: PropertyName;
  shorterThanProperty: PropertyName;
};
export type NumberPropertyOptions = CommonNumberPropertyOptions & {
  type: 'number';
  default: number;
  isIn: number[];
  isNotIn: number[];
};
export type IntegerPropertyOptions = CommonNumberPropertyOptions & {
  type: 'integer';
  default: number;
  isIn: number[];
  isNotIn: number[];
};
export type BooleanPropertyOptions = { type: 'boolean'; default: boolean };
export type DatePropertyOptions = {
  type: 'date';
  isFutureDate: boolean;
  isPastDate: boolean;
  default: string;
};
export type ObjectPropertyOptions = {
  type: 'object';
  target: ModelName;
  default: unknown;
};
export type ArrayPropertyOptions = {
  type: 'array';
  default: [];
  minSize: number;
  maxSize: number;
  items: PropertyOptions;
};
export type NumberFormat = 'frequency,acceleration';
export type General = {
  name: PropertyName;
  description: string;
  required: boolean;
  unique: boolean;
};
export type Transform = { acceptString: boolean };
export type Validation = {
  equalToProperty: PropertyName;
  notEqualToProperty: PropertyName;
};
export type Encryption = { hash: boolean; encrypt: boolean };
export type Dto = { write: boolean; read: boolean; udpate: boolean };
export type CommonNumberPropertyOptions = {
  isEven: boolean;
  isOdd: boolean;
  numberFormat: NumberFormat;
  minimum: number;
  maximum: number;
  moreThanProperty: PropertyName;
  lessThanProperty: PropertyName;
};
export type RelationType =
  | 'many-to-many'
  | 'many-to-one'
  | 'one-to-one'
  | 'one-to-many';
export type OnDelete =
  | 'RESTRICT'
  | 'CASCADE'
  | 'SET NULL'
  | 'DEFAULT'
  | 'NO ACTION';
export type OnUpdate =
  | 'RESTRICT'
  | 'CASCADE'
  | 'SET NULL'
  | 'DEFAULT'
  | 'NO ACTION';
export type StringFormat = 'short' | 'long' | 'email';
export type InputType =
  | 'text'
  | 'textarea'
  | 'texteditor'
  | 'number'
  | 'number-range'
  | 'integer'
  | 'integer-range'
  | 'currency'
  | 'percent'
  | 'rate'
  | 'switch'
  | 'select'
  | 'autocomplete'
  | 'date'
  | 'date-time'
  | 'checkbox'
  | 'checkbox-group'
  | 'radio'
  | 'radio-group';
export type Icon = 'search' | 'home' | 'menu';
export type ModelSchema = {
  implementings: ModelName;
  extendings: ModelName;
  uniques: PropertyName[];
  properties: PropertyOptions[];
  relations: RelationPropertyOptions[];
};
