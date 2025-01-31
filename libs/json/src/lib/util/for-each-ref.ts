import { JSONSchema } from '@rline/type';
import { forEachKey, ForEachKeyCallBack } from '@rline/utils';

/**
 * Go through for each ref ,with root-schema
 * @param schema
 * @param callback
 */
export function forEachRef(
  schema: JSONSchema,
  callback: ForEachKeyCallBack<JSONSchema, JSONSchema>
): void {
  forEachKey<JSONSchema, JSONSchema>(schema, '$ref', callback);
}
