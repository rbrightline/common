export type ForEachCallback = <T>(
  value: T,
  index: number,
  first: boolean,
  last: boolean
) => void | Promise<void>;

/**
 * Go through for each item in an array ( providing first, last, and index value of the item )
 * @param items array
 * @param callback callback {@link ForEachCallback}
 */
export function foreach<T>(items: T[], callback: ForEachCallback): void {
  items.forEach(async (v, index) => {
    callback(v, index, index == 0, index == items.length - 1);
  });
}
