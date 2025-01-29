import { JSONBooleanSchema } from './boolean';
import { JSONConditionalSchema } from './conditional';
import { JSONNumberSchema } from './number';
import { JSONStringSchema } from './string';

export type JSONPrimitiveSchema = JSONConditionalSchema &
  (JSONStringSchema | JSONNumberSchema | JSONBooleanSchema);
