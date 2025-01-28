import { NumberNotInRangeError } from '../errors';
import { Hour, HumanAge } from '../num';
import { isBetween } from '../utils';

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

export function humanAge(value: HumanAge): HumanAge {
  if (value > 200) {
    throw new Error('value is not in range');
  }
  return value;
}

export function hour(value: Hour): Hour {
  if (!isBetween(value, 0, 23)) {
    throw new NumberNotInRangeError();
  }

  return value;
}
