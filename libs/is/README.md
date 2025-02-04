<div align="center">
  <img src="https://raw.githubusercontent.com/rbrightline/common/refs/heads/main/libs/is/favicon.png" alt="Logo" width="200"/>
</div>

# @rline/is

The library provides a set of functions for variable asignments. Most of the time we have to check the value is defined or not, this library provides very useful functions to prevent the extensive usage of if-else statements

## Installation

```shell
pnpm add @rline/is
```

## Examples

### Requried value

Old code

```typescript
function someFunction(value: T): T | never {
  if (value == undefined) {
    throw new Error('Value is required');
  }
  return value;
}
```

New Code

```typescript
import { rval } from '@rline/is';

function someFunction(value: T): T | never {
  return rval(value);
}
```

### Required Not Empty Value

Old code

```typescript
function isEmpty(value: T): boolean {
  // check the value is not empty
  return true | false;
}

function someFunction(value: T): T | never {
  if (value == undefined) throw new Error('Value is required');

  if (isEmpty(value)) throw new Error('Value is empty');

  return value;
}
```

New Code

```typescript
import { rval } from '@rline/is';

function someFunction(value: T): T | never {
  return rval(value);
}
```

## Documentation

Detailed documentation [Documentation](https://rbrightline.github.io/common/is/)

```

```
