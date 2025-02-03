<div align="center">
  <img src="https://raw.githubusercontent.com/rbrightline/common/refs/heads/main/libs/barcode/favicon.png" alt="Logo" width="200"/>
</div>

# @rline/barcode

Barcode generator

## Installation

```shell
pnpm add @rline/barcode
```

## Usage

```typescript
import { generateBarcode } from '@rline/barcode';

generateBarcode('UPC-A');

generateBarcode('Code128');
```

## UPC-A

The **UPC-A (Universal Product Code-A)** barcode is a 12-digit barcode used primarily in the retail industry for tracking and identifying products at the point of sale. It is the most common barcode format in the United States and Canada.

### **Key Features of UPC-A:**

1. **Structure:**
   - The UPC-A barcode consists of 12 numeric digits:
     - **First digit:** A number system character indicating the type of product.
     - **Next five digits:** Manufacturer identification number.
     - **Following five digits:** Product code assigned by the manufacturer.
     - **Last digit:** A check digit used for error detection.
2. **Encoding:**

   - Uses black bars and white spaces to encode numbers in a way that can be read by barcode scanners.
   - Encodes data using **scannable patterns** that represent numbers from 0 to 9.

3. **Usage:**

   - Found on nearly all retail products for **inventory management, pricing, and checkout scanning**.
   - Commonly used in supermarkets, department stores, and e-commerce.

4. **Comparison with Other UPC Versions:**
   - **UPC-A** (12 digits) is the standard format.
   - **UPC-E** (8 digits) is a compressed version used for smaller packages.
   - UPC-A is also compatible with **EAN-13**, which is used internationally.

## Code128

**Code 128** is a high-density, alphanumeric barcode used primarily in logistics, shipping, and supply chain management. It is more versatile than UPC-A because it can encode **numbers, letters (both uppercase and lowercase), and special characters**.

### **Key Features of Code 128:**

1. **Structure:**
   - Uses a **variable-length** format, meaning it can encode **any number of characters** (compared to UPC-A, which is fixed at 12 digits).
   - Includes **start and stop characters**, data characters, and a check digit for error detection.
2. **Encoding:**

   - Uses **three character sets (A, B, and C):**
     - **Set A**: Uppercase letters, numbers, and control characters.
     - **Set B**: Uppercase and lowercase letters, numbers, and symbols.
     - **Set C**: Numeric-only encoding (highly efficient for long numbers).
   - Supports **automatic switching** between these sets for optimal space efficiency.

3. **Usage:**

   - Commonly used in **shipping and logistics** (e.g., FedEx, UPS, and USPS tracking labels).
   - Found in **inventory systems, medical labeling, and product serialization**.
   - Used for **GS1-128 (formerly UCC/EAN-128)**, a variation used in the retail and supply chain industries.

4. **Comparison with Other Barcodes:**
   - More **data-dense** than UPC-A, making it suitable for compact labels.
   - Unlike **UPC and EAN**, which are numeric-only, Code 128 supports **letters and special characters**.
   - Used in applications where **serial numbers, batch numbers, and detailed information** need to be encoded.

## Documentation

Detailed documentation [Documentation](https://rbrightline.github.io/common/barcode)
