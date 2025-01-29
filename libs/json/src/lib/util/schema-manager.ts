import { forEachFile, forEachJSONSchemaFile, readJSONFile } from '@rline/fs';
import { names } from '@rline/names';
import { JSONSchema, PickRequired } from '@rline/type';
import { getLastSegment } from '@rline/utils';
import { join } from 'path';

export type SchemaManagerOptions = {
  /**
   * Main schema filepath
   */
  mainFilePath?: string;

  /**
   * Root directory of the schemas or The parent directory of the main schema file
   */
  rootPath?: string;
};

/**
 * The schema type that ready to use by the SchemaManager
 */
export type ReadyJSONSchema = PickRequired<
  JSONSchema,
  'title' | '$filepath' | '$dirpath'
>;

export class SchemaManager {
  static defaultRootPath = './';
  static defaultMainFilePath = './main.schema.json';

  protected readonly root: string;
  protected readonly main: string;
  protected readonly map = new Map<string, JSONSchema>();

  constructor(options?: SchemaManagerOptions) {
    this.root = options?.rootPath ?? SchemaManager.defaultRootPath;
    this.main = options?.mainFilePath ?? SchemaManager.defaultMainFilePath;
  }

  protected isDefinitionPath(referencepath: string): boolean {
    return referencepath.startsWith('#/');
  }
  /**
   * Read JSONSchema file by filepath and return the schema
   * @param filepath
   * @returns
   */
  protected async read(filepath: string) {
    return await readJSONFile<JSONSchema>(filepath);
  }

  /**
   * After reading the schema value, set the default values
   * @param absoluteFilePath
   * @param schema
   * @returns
   */
  protected setDefaultValues(): void {
    const entries = this.map.entries();

    for (const [key, value] of entries) {
      const filename = getLastSegment(key);
      value.title = names(filename).pascalCase;
      value.$filepath = key;
      value.$dirpath = join(key, '..');
    }
  }

  /**
   * Read schema files and store them  by absolute file path into the map
   */
  protected async readAndMap(): Promise<void> {
    await forEachJSONSchemaFile(this.root, async (absoluteFilePath: string) => {
      const schema = await this.read(absoluteFilePath);
      this.map.set(absoluteFilePath, schema);
    });
  }

  /**
   * Convert all relative $ref values into absolute paths
   * @param schema
   */
  refsToAbsolutePath(schema: ReadyJSONSchema): void {
    const pairs = Object.entries(schema);
    if (pairs.length > 0) {
      if (schema.$ref) {
        /**
         * If the reference is definition reference, skip the operation
         */
        if (schema.$ref.startsWith('#/')) return;

        schema.$ref = join(schema.$dirpath, schema.$ref);
      } else {
        for (const [, value] of pairs) {
          if (typeof value == 'object') {
            this.refsToAbsolutePath(value);
          }
        }
      }
    }
  }

  /**
   * map each file by absolute filepath and file content ( as JSONSchema )
   */
  protected async readAndMapSchemasByAbsolutePath() {
    await forEachFile(this.root, async (filepath: string) => {
      const schema = await this.read(filepath);
      schema.$filepath = filepath;
      schema.$dirpath = join(filepath, '..');
      this.map.set(filepath, schema);
    });
  }

  compile() {
    throw new Error('Not implemented');
  }
}
