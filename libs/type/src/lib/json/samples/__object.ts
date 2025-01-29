import { JSONSchema } from '../json-schema';

export const StringSchema: JSONSchema = {
  type: 'object',
  maxProperties: 3,
  minProperties: 1,
  properties: {
    name: {
      type: 'string',
      minLength: 3,
      maxLength: 30,
    },
  },
  definitions: {},
};
