<div align="center">
  <img src="https://raw.githubusercontent.com/rbrightline/common/refs/heads/main/libs/is/favicon.png" alt="Logo" width="200"/>
</div>

# @rline/is

Better and safer typescript

## Goal

1. any variable in the code must be one of valid string, number, boolean, object, or array. The variables must be able to use in their relative operations without any error. For example, `NaN` is typeof number but it does not work with any numeric operations.

## Valid Values

- string: none-empty string
- number: none-zero
- boolen
- object: none-empty object
- array: none-empty array, also throw error when all values are null or undefined

## Installation

```shell
pnpm add @rline/is
```

## Naming Convention

### Type and value checking functions

- First one or two letters are the type of the function such as `t` stands for `isType`, `e` is `isEmpty`, `ne` is `isNotEmpty`, any function starts with these prefixes return `boolean`

## Usage

- [ ] add example for the is library

```typescript
const strValue: string | undefiend = val('some');
const strValue: number | undefiend = val(1);
const boolValue: boolean | undefiend = val(true);
const objectValue: Some | undefiend = val<Some>(undefined);
const arrValue: [] | undefiend = val([]);

const rstrValue: string = val('some', { required: true });
const rstrValue: number = val(1, { required: true });
const rboolValue: boolean = val(true, { required: true });
const robjectValue: Some = val<Some>(undefined, { required: true });
const rarrValue: O[] = val<O>([], { required: true });

const readonlyObjectValue: O[] = val<O>([], { required: true, readonly: true });
const readonlyArrValue: O[] = val<O>([], { required: true, readonly: true });
```

## Documentation

Detailed documentation [Documentation](https://rbrightline.github.io/common/is/)
