import { forEachJSONSchemaFile, readJSONFile, writeJSONFile } from '@rline/fs';
import { names } from '@rline/names';
import {
  JSONSchema,
  KeyNotFoundError,
  MissingPropertyError,
  NotAbsolutePathError,
  RequiredError,
} from '@rline/type';
import {
  clone,
  entries,
  getLastSegment,
  hasKeys,
  isDefinitionPath,
  keys,
} from '@rline/utils';
import { isAbsolute, join } from 'path';
import { forEachRef } from './for-each-ref';
import { ReadyJSONSchema } from './ready-schema';

export type SchemaManagerOptions = {
  /**
   * Main schema filepath
   */
  main: string;

  /**
   * Root directory of the schemas or The parent directory of the main schema file
   */
  root: string;

  /**
   * Output directory, by default dist
   */
  output: string;
};

export class SchemaManager {
  /**
   * Default rootpath
   */
  static defaultRootPath = join(__dirname, './');

  /**
   * Default mainfilepath
   */
  static defaultMainFilePath = join(__dirname, './main.schema.json');

  /**
   * Default outuptpath
   */
  static defaultOutuptPath = join(__dirname, './dist');

  /**
   * Schem project root directory
   */
  protected readonly root: string;
  /**
   * Entiry schema file
   */
  protected readonly main: string;

  /**
   * Output directory (Dist)
   */
  protected readonly output: string;

  /**
   * Schema map
   * @key key absolute filepath
   * @value schema {@link ReadyJSONSchema}
   */
  protected readonly map = new Map<string, ReadyJSONSchema>();

  constructor(options?: SchemaManagerOptions) {
    // setting default values
    this.root = options?.root ?? SchemaManager.defaultRootPath;
    this.main = options?.main ?? SchemaManager.defaultMainFilePath;
    this.output = options?.output ?? SchemaManager.defaultOutuptPath;

    // validating
    if (!isAbsolute(this.root)) throw new NotAbsolutePathError();
    if (!isAbsolute(this.main)) throw new NotAbsolutePathError();
    if (!isAbsolute(this.output)) throw new NotAbsolutePathError();
  }

  /**
   * Read JSONSchema file by filepath and return the schema
   * @param filepath
   * @returns
   */
  protected async read(filepath: string) {
    return await readJSONFile<JSONSchema>(filepath);
  }

  protected title(filepath: string): string {
    return names(getLastSegment(filepath).replace('.schema.json', ''))
      .pascalCase;
  }

  /**
   * Read all descendant schemas under the root directory,
   * Then set default (required values), $filepath, $dirpath, title, and definitions
   * Then map them by their own absolute filename path so which will be unique for each file
   */
  protected async readAndMapSchemasByAbsolutePath() {
    await forEachJSONSchemaFile(
      this.root,
      async (filepath: string) => {
        // read the schema file
        const schema = await this.read(filepath);

        // Set schema title
        schema.title = this.title(filepath);
        schema.$filepath = filepath;
        schema.$dirpath = join(schema.$filepath, '..');

        if (
          hasKeys(schema, [
            'type',
            'title',
            '$filepath',
            '$dirpath',
            'definitions',
          ])
        ) {
          this.map.set(schema.title, schema);
        } else {
          throw new MissingPropertyError();
        }
      },
      { recursive: true }
    );
  }

  /**
   * Transform all relative reference paths int he schemas into absolute paths
   * @param schema
   */
  protected toAbsoluteReferencePaths(): void {
    const __toAbsoluteReferencePaths = (
      schema: ReadyJSONSchema,
      $filepath: string
    ) => {
      const pairs = Object.entries(schema);

      if (pairs.length > 0) {
        if (schema.$ref) {
          // if reference is definition path, then skip
          if (isDefinitionPath(schema.$ref)) return;
          // if reference is absolute path, then skip
          if (isAbsolute(schema.$ref)) return;

          schema.$ref = join($filepath, '..', schema.$ref);
        } else {
          for (const [, value] of pairs) {
            if (typeof value == 'object') {
              __toAbsoluteReferencePaths(value, $filepath);
            }
          }
        }
      }
    };

    this.map.forEach((value, key) => {
      __toAbsoluteReferencePaths(value, value.$filepath);
    });
  }

  /**
   * Definitions keys is used to store references. So, this function set default value ({}) for each schema
   **/
  protected initializeEachDiefintionsIfUndefined() {
    this.map.forEach((e) => {
      if (!e.definitions) e.definitions = {};
    });
  }

  /**
   * The ready-schema must have title, $filepath, $dirpath, and definitions key defined.
   */
  protected validateSchemas() {
    this.map.forEach((e) => {
      if (!e.title) throw new RequiredError();
      if (!e.$filepath) throw new RequiredError();
      if (!e.$dirpath) throw new RequiredError();
      if (!e.definitions) throw new RequiredError();
    });
  }

  protected getRootSchema(): ReadyJSONSchema | never {
    const rootSchema = this.map.get(this.title(this.main));
    if (!rootSchema) throw new KeyNotFoundError();
    return rootSchema;
  }

  protected toDefinitionSchema(schema: ReadyJSONSchema): JSONSchema {
    const cSchema = clone<JSONSchema>(schema);
    delete cSchema.title;
    delete cSchema.$schema;
    delete cSchema.$dirpath;
    delete cSchema.$filepath;
    delete cSchema.definitions;
    return cSchema;
  }

  /**
   * Convert absolute $ref values into definitions
   */
  protected toDefinitions() {
    const rootSchema = this.getRootSchema();
    for (const e of this.map.values()) {
      forEachRef(e, (schema, __refSchema) => {
        if (isDefinitionPath(__refSchema.$ref)) return;

        const refTitle = this.title(__refSchema.$ref);
        const refSchema = this.map.get(refTitle);

        if (refSchema) {
          if (schema.title != refSchema.title) {
            rootSchema.definitions[refSchema.title] =
              this.toDefinitionSchema(refSchema);

            if (keys(refSchema.definitions).length > 0) {
              const refDefinitions = entries(refSchema.definitions);
              for (const [key, value] of refDefinitions) {
                rootSchema.definitions[key] = value;
              }
            }
          }
        } else {
          console.log('>>>>> ', __refSchema.$ref);
          console.log('>>>>> ', __refSchema);
          console.log('>>>>> ', refTitle);

          console.log(this.map.keys());

          throw new KeyNotFoundError();
        }
      });
    }

    // Transform $ref paths definition paths
    for (const e of this.map.values()) {
      forEachRef(e, (rootSchema, referenceSchema) => {
        if (isDefinitionPath(referenceSchema.$ref)) return;

        const refSchema = this.map.get(this.title(referenceSchema.$ref));
        if (refSchema) {
          referenceSchema.$ref = `#/definitions/${refSchema.title}`;
        } else {
          throw new KeyNotFoundError();
        }
      });
    }
  }

  async write() {
    const rootSchema = this.getRootSchema() as JSONSchema;
    delete rootSchema.$dirpath;
    delete rootSchema.$filepath;

    await writeJSONFile(this.main.replace(this.root, this.output), rootSchema);
  }

  async compile() {
    await this.readAndMapSchemasByAbsolutePath();
    this.toAbsoluteReferencePaths();
    this.initializeEachDiefintionsIfUndefined();

    console.log('------------------------------------');
    console.log(this.map);
    this.toDefinitions();
    this.validateSchemas();
    await this.write();
  }
}
