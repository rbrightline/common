<div align="center">
  <img src="https://raw.githubusercontent.com/rbrightline/common/refs/heads/main/libs/property/favicon.png" alt="Logo" width="200"/>
</div>

# @rline/property

Property decorator for data transfer objects that feed data to both `@nestjs/swagger` and `class-validator`

## Installation

```shell
pnpm add @rline/property
```

## Usage

```typescript
export class Abc {
  // Old way
  @ApiProperty({ type: 'string', minLength: 3, maxLength: 400 })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(400)

  // New way
  @Property({ type: 'string', required: true, minLength: 3, maxLength: 400 })
  value: string;
}
```

## Documentation

Detailed documentation [Documentation](https://rbrightline.github.io/common/property/)
