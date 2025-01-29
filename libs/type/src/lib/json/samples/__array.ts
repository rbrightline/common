import { JSONSchema } from '../json-schema';

export const ArraySchema: JSONSchema = {
  type: 'array',
  items: {
    type: 'string',
    default: '100',
  },
};
