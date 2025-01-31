import { BooleanSchemaRaw } from './boolean';
import { NumberSchemaRaw } from './number';

import { StringSchemaRaw } from './string';

export type PrimitiveSchemaRaw =
  | StringSchemaRaw
  | NumberSchemaRaw
  | BooleanSchemaRaw;
