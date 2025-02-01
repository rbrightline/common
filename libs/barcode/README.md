<div align="center">
  <img src="https://raw.githubusercontent.com/rbrightline/common/refs/heads/main/libs/barcode/favicon.png" alt="Logo" width="200"/>
</div>

# @rline/barcode

Generate barcode

## Installation

```shell
pnpm add @rline/barcode
```

## Usage

```typescript
const barcode = generateBarcode('UPC-A');
expect(barcode).toMatch(/^\d{12}$/); // UPC-A should be 12 digits
const barcode = generateBarcode('Code128');
expect(barcode).toMatch(/^[A-Za-z0-9]{8,12}$/); // Code128 should be 8-12 alphanumeric characters
```

## Documentation

Detailed documentation [Documentation](https://rbrightline.github.io/common/barcode)
