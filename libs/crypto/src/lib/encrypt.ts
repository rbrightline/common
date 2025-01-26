import { createCipheriv, createDecipheriv } from 'crypto';
import { EncryptedData } from './encoded-data';

export const ALGORITHM = 'aes-256-cbc';

/**
 * encrypt data
 * @param value data to encrypt
 * @param key encryption key, can be generated using `randomBytes`
 * @param iv encryption iv, can be generated using `randomBytes`
 * @returns encripted data {@link EncryptedData}
 */
export function encrypt(
  value: string,
  key: Buffer,
  iv: Buffer
): Promise<EncryptedData> {
  return new Promise((res, rej) => {
    try {
      const cipher = createCipheriv(ALGORITHM, key, iv);
      let encrypted = cipher.update(value, 'utf8', 'hex');
      encrypted += cipher.final('hex');
      res({
        iv: iv.toString('hex'),
        data: encrypted,
      });
    } catch (err) {
      rej(err);
    }
  });
}

/**
 * Decrypt data
 * @param encryptedData
 * @param key secret key
 * @param iv secret iv
 * @returns decrypted data
 */
export function decrypt(
  encryptedData: EncryptedData,
  key: Buffer,
  iv: Buffer
): Promise<string> {
  return new Promise((res, rej) => {
    try {
      const decipher = createDecipheriv(ALGORITHM, key, iv);
      let decrypted = decipher.update(encryptedData.data, 'hex', 'utf8');
      decrypted += decipher.final('utf8');
      res(decrypted);
    } catch (err) {
      rej(err);
    }
  });
}
