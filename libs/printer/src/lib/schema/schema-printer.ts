import { JSONSchema } from '@rline/type';

export class SchemaPrinter {
  constructor(protected readonly schema: JSONSchema) {}

  /**
   * enum
   * properties
   * allOf
   * oneOf
   * $ref
   * definitions
   *
   *
   * - 1. print the definitions first
   * - 2. then print the main schema
   */
  print() {}
}
