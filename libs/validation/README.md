<div align="center">
  <img src="https://raw.githubusercontent.com/rbrightline/common/refs/heads/main/libs/validation/favicon.png" alt="Logo" width="200"/>
</div>

# @rline/validation

Wrapper decorator around `class-validator` library.

## Installation

```shell
pnpm add @rline/validation
```

## Usage

```typescript

class Abc {

  // Old version
  @MinLength(3)
  @MaxLength(400)

  // New Version
  @PropertyValidation({ type:"string", minLength:3, maxLength:400 });
  name: string;
}

```

## Documentation

Detailed documentation [Documentation](https://rbrightline.github.io/common/validation/)
