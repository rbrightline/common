<div align="center">
  <img src="https://raw.githubusercontent.com/rbrightline/common/refs/heads/main/libs/names/favicon.png" alt="Logo" width="200"/>
</div>

# @rline/names

Utilities to create names, restfull api paths, and authentication service paths.

## Installation

```shell
pnpm add @rline/names
```

## Usage

### Rest api paths

```typescript
restPaths('category');

const output: RestApiPaths = {
  plural: 'categories',
  singular: 'category',
  id: 'category/:id',
  increment: 'category/:id/increment',
  decrement: 'category/:id/decrement',
  count: 'categories/count',
  relation: 'category/:id/:relationName',
  relationId: 'category/:id/:relationName/:relationId',
  file: 'category/:id/file',
  img: 'category/:id/img',
};
```

### Pluralize

```typescript
pluralize('person'); // output : 'people'
pluralize('cat'); // output : 'cats'
pluralize('category'); // output : 'categories'
pluralize('bus'); // output : 'buses'
pluralize('box'); // output : 'boxes'
pluralize('buzz'); // output : 'buzzes'
pluralize('brush'); // output : 'brushes'
pluralize('church'); // output : 'churches'
// ...
```

### Names

```typescript
const Names = names('example   name');

Names.camelCase; // output:  'exampleName',
Names.constCase; // output:  'EXAMPLE_NAME',
Names.kebabCase; // output:  'example-name',
Names.pascalCase; // output:  'ExampleName',
Names.snakeCase; // output:  'example_name',
Names.titleCase; // output:  'Example Name',
Names.controllerName; // output:  'ExampleNameController',
Names.serviceName; // output:  'ExampleNameService',
Names.moduleName; // output:  'ExampleNameModule',
Names.sentenceCase; // output:  'Example name',
Names.dotCase; // output:  'example.name',
```
