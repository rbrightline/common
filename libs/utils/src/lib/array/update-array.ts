import { ValueType } from '@rline/type';

/**
 * Update the item of the array by the index of the item.s
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
