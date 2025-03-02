import { forEachKey, ForEachKeyCallBack } from '@rline/utils';
import { ReadyJSONSchema } from './ready-schema';

/**
 * Go through for each refpath
 * @param schema
 * @param callback
 */
export function forEachRef(
  schema: ReadyJSONSchema,
  callback: ForEachKeyCallBack<ReadyJSONSchema, ReadyJSONSchema>
): void {
  forEachKey<ReadyJSONSchema, ReadyJSONSchema>(schema, '$ref', callback);
}
