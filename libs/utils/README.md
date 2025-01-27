<div align="center">
  <img src="https://raw.githubusercontent.com/rbrightline/common/refs/heads/main/libs/utils/favicon.png" alt="Logo" width="200"/>
</div>

# @rline/utils

Common utilities

## Installation

```shell
pnpm add @rline/utils
```

## Usage

### File

```typescript
readJSONFIle<T>():Promise<T>;
readPakcageJSONFile():Promise<PackageJSON>;
```

### Array

```typescript

unique<T>(value:T[]):T[];

uniqueBy<T >(value:T[], key:string):T[];


```
