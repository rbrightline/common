import { generateBarcode } from './barcode';

describe('generateBarcode', () => {
  it('should generate a valid UPC-A barcode', () => {
    const barcode = generateBarcode('UPC-A');
    expect(barcode).toMatch(/^\d{12}$/); // UPC-A should be 12 digits
  });

  it('should generate a valid Code128 barcode', () => {
    const barcode = generateBarcode('Code128');
    expect(barcode).toMatch(/^[A-Za-z0-9]{8,12}$/); // Code128 should be 8-12 alphanumeric characters
  });

  it('should throw an error for unsupported barcode type', () => {
    expect(() => generateBarcode('UnsupportedType' as any)).toThrow(
      'Unsupported barcode type'
    );
  });

  it('should default to generating a UPC-A barcode when no type is provided', () => {
    const barcode = generateBarcode();
    expect(barcode).toMatch(/^\d{12}$/); // Default should be UPC-A which is 12 digits
  });
});
