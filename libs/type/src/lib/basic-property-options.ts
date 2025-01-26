export type PropertyType =
  | 'string'
  | 'number'
  | 'integer'
  | 'boolean'
  | 'date'
  | 'object'
  | 'array';

export type GeneratedType =
  | 'createdAt'
  | 'updatedAt'
  | 'deletedAt'
  | 'uuid'
  | 'barcode'
  | 'id';

export type CommonBasicPropertyOptions = {
  name: string;
  required?: boolean;
  description?: string;
  unique?: boolean;
  update?: boolean;
  hash?: boolean;
  encrypt?: boolean;
  generated?: GeneratedType;
};

export type StringBasicPropertyOptions = {
  type: 'string';
  default?: string;
};

export type NumberBasicPropertyOptions = {
  type: 'number';
  default?: number;
};

export type IntegerBasicPropertyOptions = {
  type: 'integer';
  default?: number;
};

export type BooleanBasicPropertyOptions = {
  type: 'boolean';
  default?: boolean;
};

export type DateBasicPropertyOptions = {
  type: 'date';
  default?: string;
};

export type ArrayBasicPropertyOptions<T = unknown> = {
  type: 'array';
  items: BasicPropertyOptions & { name?: string };
  default?: T[];
};

export type ObjectBasicPropertyOptions = {
  type: 'object';
  target: string;
};
/**
 * The basic property options are the same in all projects
 */
export type BasicPropertyOptions<T = unknown> = CommonBasicPropertyOptions &
  (
    | StringBasicPropertyOptions
    | NumberBasicPropertyOptions
    | IntegerBasicPropertyOptions
    | BooleanBasicPropertyOptions
    | DateBasicPropertyOptions
    | ObjectBasicPropertyOptions
    | ArrayBasicPropertyOptions<T>
  );
