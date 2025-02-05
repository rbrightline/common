/**
 * Generates a valid, readable barcode string compatible with USA standards.
 * Default is a UPC-A barcode (12 digits).
 * @param type - The type of barcode to generate ("UPC-A" or "Code128").
 * @returns A string representing the barcode.
 */
export function barcode(type: 'UPC-A' | 'Code128' = 'UPC-A'): string {
  if (type === 'UPC-A') {
    return generateUPCA();
  } else if (type === 'Code128') {
    return generateCode128();
  } else {
    throw new Error('Unsupported barcode type');
  }
}

/**
 * Generates a valid UPC-A barcode (12 digits).
 * UPC-A consists of 11 data digits and a checksum digit.
 * @returns A string representing a UPC-A barcode.
 */
export function generateUPCA(): string {
  const dataDigits = Array.from({ length: 11 }, () =>
    Math.floor(Math.random() * 10)
  ).join('');
  const checksum = calculateUPCAChecksum(dataDigits);
  return dataDigits + checksum;
}

/**
 * Calculates the checksum digit for a UPC-A barcode.
 * @param dataDigits - The first 11 digits of the UPC-A barcode.
 * @returns The checksum digit as a string.
 */
export function calculateUPCAChecksum(dataDigits: string): string {
  const digits = dataDigits.split('').map(Number);
  let sumOdd = 0,
    sumEven = 0;

  digits.forEach((digit, index) => {
    if (index % 2 === 0) {
      sumOdd += digit; // Odd-positioned digits (1-based)
    } else {
      sumEven += digit; // Even-positioned digits (1-based)
    }
  });

  const totalSum = sumOdd * 3 + sumEven;
  const checksum = (10 - (totalSum % 10)) % 10;
  return checksum.toString();
}

/**
 * Generates a Code 128 barcode string.
 * Code 128 includes alphanumeric characters.
 * @returns A string representing a Code 128 barcode.
 */
export function generateCode128(): string {
  const charset =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const length = 8 + Math.floor(Math.random() * 5); // Code 128 barcodes typically vary in length
  return Array.from({ length }, () =>
    charset.charAt(Math.floor(Math.random() * charset.length))
  ).join('');
}
