import { JSONSchema } from '../json-schema';

export const StringSchema: JSONSchema = {
  type: 'string',
  const: 'some',
  default: 'some',
  minLength: 3,
  maxLength: 100,
  enum: ['some', 'some', 'some'],
};
