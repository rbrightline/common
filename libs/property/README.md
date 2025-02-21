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


