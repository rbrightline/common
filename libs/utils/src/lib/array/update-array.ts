import { ValueType } from '@rline/type';

export function updateArray<T extends ValueType>(
  arr: T[],
  newValue: T,
  index: number
): void {
  arr[index] = newValue;
}
