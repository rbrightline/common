import { names } from '@rline/names';
import { ModelType, RelationOptions } from '@rline/type';
import { unique } from './unqiue';

export function importsFromRelations(
  type: ModelType,
  relations?: RelationOptions[]
): string {
  if (type == 'class') {
    const result = relations
      ?.map((e) => e.target)
      .map((e) => `import { ${e} } '../${names(e).snakeCase}' `);

    if (result) {
      return unique(result).join('\n');
    }
  } else if (type == 'dto') {
    if (relations) return "import { IDDto } from '@rline/dto';";
    return '';
  } else if (type == 'entity') {
    const result = relations
      ?.map((e) => e.target)
      .map((e) => `import { ${e} } '../${names(e).snakeCase}';`);

    if (result) return unique(result).join('\n');
  }

  return '';
}
