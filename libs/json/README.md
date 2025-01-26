# @rline/json

Compile JSON Schemas to a single schema file

## Installation

```bash
pnpm add -g @rline/json
```

## Usage

```shell
json <rootdir> <main-schema-file> <bundle-schema-name>
```

## Examples

```shell
/
├── bundle.schema.json
├── main.schema.json
├── user
│ ├── profile.schema.json
│ ├── settings.schema.json
├── products
│ ├── product.schema.json
│ ├── pricing.schema.json
├── orders
| ├── product.schema.json
│ ├── pricing.schema.json
```

This command will build the `bundle.scheme.json`

```shell
json ./ main.schema.json bundle.schema.json
```
