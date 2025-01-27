<div align="center">
  <img src="https://raw.githubusercontent.com/rbrightline/common/refs/heads/main/libs/json/favicon.png" alt="Logo" width="200"/>
</div>

# @rline/json

JSON schema compiler and typescript parser. Create a schema project, compile, and transform it into typescript types.

## Installation

```bash
pnpm add -g @rline/json
```

## Usage

### Schema Compiler

The commond will compile the schemas and create a bundle (outputPath)

```shell
json compile <mainSchemaFile> <outputFilePath>
```

### Example (Schema Compiler)

The command must be run outside the schema directory
The command will compile all schemas under the `./schema` directory, and write it to the `./dist/output.schema.json` file

```shell
json compile ./schemas/main.schema.json ./dist/output.schema.json
```

### Typescript Compiler

Before runing this command, compile the schema file first because this command only works for a single file. The command will compile the schema file into typescript types.

```shell
json tsc <mainSchemaFile> <outputFilePath
```

### Example (Typescript Compiler)

The command will convert the json schema into the typescript types

```shell
json tsc ./output.schema.json ./output.ts
```
