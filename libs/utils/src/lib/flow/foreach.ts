export type ForEachCallback = <T>(
  value: T,
  index: number,
  first: boolean,
  last: boolean
) => void | Promise<void>;

export function foreach<T>(items: T[], callback: ForEachCallback): void {
  items.forEach(async (v, index) => {
    callback(v, index, index == 0, index == items.length - 1);
  });
}
