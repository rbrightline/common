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



## Funding

Thank you for using `@puq/core` It's an open-source project, and maintaining it takes time and effort. If you find this library useful, please consider supporting its ongoing development. Your contributions help ensure that the project stays up-to-date, secure, and well-maintained.

[Instant Funding](https://cash.app/$puqlib)

### Your funding will go toward

- **Bug fixes and updates** to ensure compatibility with the latest versions of dependencies.
- **New features** that will make the library even more powerful.
- **Documentation** improvements to help users get the most out of [Your Library Name].
- **General maintenance** to keep the library running smoothly and securely.

Contact to the developer: [robert.brightline@gmail.com]

[Support the developer](https://cash.app/$puqlib)
