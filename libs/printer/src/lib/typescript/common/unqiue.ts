export function unique(list: string[]): string[] {
  return [...new Set(list)];
}

export function uniqueBy<T>(list: T[], key: keyof T): T[] {
  const map = new Map<any, T>();
  list.forEach((e: T) => map.set(e[key], e));
  return [...map.values()];
}
