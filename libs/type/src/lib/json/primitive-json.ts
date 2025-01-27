import { JSONBooleanSchema } from './boolean';
import { JSONConditionalSchema } from './conditional';
import { JSONNumberSchema } from './number';
import { JSONStringSchema } from './string';

export type PrimitiveJSONSchema = JSONConditionalSchema<PrimitiveJSONSchema> &
  (JSONStringSchema | JSONNumberSchema | JSONBooleanSchema);
