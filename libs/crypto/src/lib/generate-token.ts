import { randomBytes } from 'crypto';

/**
 * Generate unique random token
 */
export function generateToken() {
  return randomBytes(32).toString('hex');
}
