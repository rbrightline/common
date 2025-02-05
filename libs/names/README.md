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
let R = restPaths('category');

R.plural; // output:  'categories',
R.singular; // output:  'category',
R.id; // output:  'category/:id',
R.increment; // output:  'category/:id/increment',
R.decrement; // output:  'category/:id/decrement',
R.count; // output:  'categories/count',
R.relation; // output:  'category/:id/:relationName',
R.relationId; // output:  'category/:id/:relationName/:relationId',
R.file; // output:  'category/:id/file',
R.img; // output:  'category/:id/img',
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
import { names } from '@rline/names';

let N = names('ab c');
N.camelCase; // output:  'abC'
N.constCase; // output:  'AB_C'
N.dotCase; // output:  'ab.c'
N.kebabCase; // output:  'ab-c'
N.pascalCase; // output:  'AbC'
N.titleCase; // output:  'Ab C'
N.sentenceCase; // output:  'Ab c'

N.moduleName; // output:  'AbCModule'
N.serviceName; // output:  'AbCService'
N.controllerName; // output:  'AbCController'
N.optionsName; // output:  'AbCOptions'
N.modelName; // output:  'AbCModel'
N.createDtoName; // output:  'CreateAbCDto'
N.updateDtoName; // output:  'UpdateAbCDto'
N.queryDtoName; // output:  'QueryAbCDto'

N = names('ab c', { prefix: 'SO' });
N.camelCase; // output:  'SOabC'
N.constCase; // output:  'SOAB_C'
N.dotCase; // output:  'SOab.c'
N.kebabCase; // output:  'SOab-c'
N.pascalCase; // output:  'SOAbC'
N.titleCase; // output:  'SOAb C'
N.sentenceCase; // output:  'SOAb c'
N.moduleName; // output:  'SOAbCModule'
N.serviceName; // output:  'SOAbCService'
N.controllerName; // output:  'SOAbCController'
N.optionsName; // output:  'SOAbCOptions'
N.modelName; // output:  'SOAbCModel'
N.createDtoName; // output:  'SOCreateAbCDto'
N.updateDtoName; // output:  'SOUpdateAbCDto'
N.queryDtoName; // output:  'SOQueryAbCDto'

N = names('ab c', { suffix: 'SO' });
N.camelCase; // output:  'abCSO'
N.constCase; // output:  'AB_CSO'
N.dotCase; // output:  'ab.cSO'
N.kebabCase; // output:  'ab-cSO'
N.pascalCase; // output:  'AbCSO'
N.titleCase; // output:  'Ab CSO'
N.sentenceCase; // output:  'Ab cSO'
N.moduleName; // output:  'AbCModuleSO'
N.serviceName; // output:  'AbCServiceSO'
N.controllerName; // output:  'AbCControllerSO'
N.optionsName; // output:  'AbCOptionsSO'
N.modelName; // output:  'AbCModelSO'
N.createDtoName; // output:  'CreateAbCDtoSO'
N.updateDtoName; // output:  'UpdateAbCDtoSO'
N.queryDtoName; // output:  'QueryAbCDtoSO'

N = names('ab c', { wrapper: '|' });
N.camelCase; // output:  '|abC|'
N.constCase; // output:  '|AB_C|'
N.dotCase; // output:  '|ab.c|'
N.kebabCase; // output:  '|ab-c|'
N.pascalCase; // output:  '|AbC|'
N.titleCase; // output:  '|Ab C|'
N.sentenceCase; // output:  '|Ab c|'
N.moduleName; // output:  '|AbCModule|'
N.serviceName; // output:  '|AbCService|'
N.controllerName; // output:  '|AbCController|'
N.optionsName; // output:  '|AbCOptions|'
N.modelName; // output:  '|AbCModel|'
N.createDtoName; // output:  '|CreateAbCDto|'
N.updateDtoName; // output:  '|UpdateAbCDto|'
N.queryDtoName; // output:  '|QueryAbCDto|'
```

## Documentation

Detailed documentation [Documentation](https://rbrightline.github.io/common/names/)
