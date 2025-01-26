// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export function clone<T extends {}>(options: T) {
  options = JSON.parse(JSON.stringify({ ...options }));
  return options;
}
