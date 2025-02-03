<div align="center">
  <img src="https://raw.githubusercontent.com/rbrightline/common/refs/heads/main/libs/json/favicon.png" alt="Logo" width="200"/>
</div>

# @rline/json

JSON Compiler CLI

- JSON Schema compiler, compiles multiple schemas into a single portable schema file by resolving all references.

- Typescript type generator, generate types from json schemas. Supports, `allof`,`oneOf`, other complex JSON schema properties.

## Installation

```bash
pnpm add -g @rline/json
```

## Usage

Before using any command, the schema project must be initialized.

## Initialize Project

The following command creates a new JSON-Schema project has a `schema.config.json` file to configure project variables.

```shell
json init

```

### Schema Compiler

Compiles JSON-Schema files into a single portable schema file

```shell

json schema
```

### Example (Schema Compiler)

The compiled schema will be saved in the `output` directory provided in `schema.config.json`

```shell
json schema
```

### Typescript Compiler

The compiled type will be saved in the `output` directory provided in the `schema.config.json`

```shell
json tsc
```

## Documentation

Detailed documentation [Documentation](https://rbrightline.github.io/common/json/)
