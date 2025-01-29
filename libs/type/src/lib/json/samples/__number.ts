import { JSONSchema } from '../json-schema';

export const NubmerSchema: JSONSchema = {
  title: 'Number',
  type: 'number',
  const: 100,
  default: 100,
  minimum: 0,
  maximum: 100,
  enum: [1, 2, 34, 4, 5],
};
