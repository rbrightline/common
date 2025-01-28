<div align="center">
  <img src="https://raw.githubusercontent.com/rbrightline/common/refs/heads/main/libs/fs/favicon.png" alt="Logo" width="200"/>
</div>

# @rline/fs

File system

## Installation

```shell
pnpm add @rline/fs
```

## Usage

```typescript
async readFile(filePath):Promise<string>
async writeFile(filePath):Promise<void>
async dirs(filePath):Promise<string[]>
async files(filePath):Promise<string[]>
```
