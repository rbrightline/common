export function num(defaultValue = NaN) {
  return defaultValue;
}

export function str(defaultValue = '') {
  return defaultValue;
}

export function bool(defaultValue = false) {
  return defaultValue;
}

export function obj(defaultValue = null) {
  return defaultValue;
}

export function arr<T>(defaultValue: T[] = []): T[] {
  return defaultValue;
}
