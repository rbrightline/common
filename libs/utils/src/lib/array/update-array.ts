import { ValueType } from '@rline/type';

/**
 * Update array item by index
 * @param arr
 * @param newValue
 * @param index
 */
export function updateArray<T extends ValueType>(
  arr: T[],
  newValue: T,
  index: number
): void {
  arr[index] = newValue;
}
