import { JSONCommonSchema } from './common';

export class JSONStringSchema extends JSONCommonSchema<string> {
  type: 'string';
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  enum?: string[];
}
