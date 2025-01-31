import { forEachKey, ForEachKeyCallBack } from '@rline/utils';
import { ReadyJSONSchema } from '../type';

/**
 * Go through for each ref ,with root-schema
 * @param schema
 * @param callback
 */
export function forEachRef(
  schema: ReadyJSONSchema,
  callback: ForEachKeyCallBack<ReadyJSONSchema, ReadyJSONSchema>
): void {
  forEachKey<ReadyJSONSchema, ReadyJSONSchema>(schema, '$ref', callback);
}
