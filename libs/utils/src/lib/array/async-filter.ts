export type AsyncPredicate<T> = (value: T, index: number) => Promise<boolean>;
export async function asyncFilter<T>(items: T[], callback: AsyncPredicate<T>) {
  const indexList = await Promise.all(items.map(callback));
  return items.filter((v, i) => indexList[i]);
}
