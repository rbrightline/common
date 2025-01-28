export function isBetween(value: number, start: number, end: number): boolean {
  if (start > end) {
    throw new Error(`start number must be less than end number`);
  }
  return value >= start && value <= end;
}
