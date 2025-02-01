<div align="center">
  <img src="https://raw.githubusercontent.com/rbrightline/common/refs/heads/main/libs/crypto/favicon.png" alt="Logo" width="200"/>
</div>

# @rline/crypto

Encrypt, decrypt, hash, and compare hash value.

## Installation

```shell
pnpm add @rline/crypto
```

## Usage

```typescript
import { randomBytes } from 'crypto';
import { encrypt } from '@rline/crypto';

const key = randomBytes(32);
const iv = randomBytes(32);

const data = 'Hello';
const encryptedData = encrypt(data, key, iv); // output: { iv, data(encrypted) }
const decryptedData = decrypt(encryptedData, key, iv); // output: "Hello"
```

## Documentation

Detailed documentation [Documentation](https://rbrightline.github.io/common/crypto)
