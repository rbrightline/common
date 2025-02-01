import { compareSync, genSaltSync, hashSync } from 'bcrypt';

/**
 * Hash string value
 * @param value
 * @returns
 */
export function hash<T extends { toString(): string }>(value: T) {
  return hashSync(value.toString(), genSaltSync(8));
}

/**
 * Compare the raw value with hashed value
 * @param value
 * @param hashed
 * @returns
 */
export function compare(value: string, hashed: string) {
  return compareSync(value, hashed);
}
