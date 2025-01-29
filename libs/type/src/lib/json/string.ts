import { JSONCommonSchema } from './common';

export type JSONStringSchema = JSONCommonSchema<string> & {
  type: 'string';
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  enum?: string[];
};
