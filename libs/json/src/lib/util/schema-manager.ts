import { forEachJSONSchemaFile, readJSONFile, writeJSONFile } from '@rline/fs';
import { names } from '@rline/names';
import {
  JSONSchema,
  KeyNotFoundError,
  NotAbsolutePathError,
  PickRequired,
  RequiredError,
} from '@rline/type';
import { getLastSegment, hasKeys, isDefinitionPath } from '@rline/utils';
import { isAbsolute, join } from 'path';
import { forEachRef } from './for-each-ref';

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

/**
 * The schema type that ready to use by the SchemaManager
 */
export type ReadyJSONSchema = PickRequired<
  JSONSchema,
  'type' | 'title' | '$filepath' | '$dirpath' | 'definitions'
>;

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

  /**
   * Read all descendant schemas under the root directory,
   * Then set default (required values), $filepath, $dirpath, title, and definitions
   * Then map them by their own absolute filename path so which will be unique for each file
   */
  protected async readAndMapSchemasByAbsolutePath() {
    await forEachJSONSchemaFile(this.root, async (filepath: string) => {
      // read the schema file
      const schema = await this.read(filepath);

      // Extract filename from pathF
      const shortFilename = getLastSegment(filepath);

      // Set schema title
      schema.title = names(shortFilename).pascalCase;
      schema.$filepath = filepath;
      schema.$dirpath = join(filepath, '..');

      if (!hasKeys(schema, ['definitions'])) schema.definitions = {};
      if (hasKeys(schema, ['title', '$filepath', '$dirpath', 'definitions'])) {
        this.map.set(filepath, schema);
      } else {
        throw new Error(`The schema is not prepared ${filepath}`);
      }
    });
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

    this.map.forEach(__toAbsoluteReferencePaths);
  }

  protected initializeDefinitionsIfNot() {
    this.map.forEach((e) => {
      if (!e.definitions) e.definitions = {};
    });
  }

  /**
   * Convert absolute $ref values into definitions
   */
  protected toDefinitions() {
    this.map.forEach((e) => {
      forEachRef(e, async (rootSchema, referenceSchema) => {
        const refSchema = this.map.get(referenceSchema.$ref);
        if (refSchema) {
          if (!refSchema.title) throw new RequiredError();

          rootSchema.definitions[refSchema.title] = refSchema;
        } else {
          throw new KeyNotFoundError();
        }
      });
    });
  }

  async write() {
    this.map.forEach(async (value, filepath) => {
      const distFilepath = filepath.replace(this.root, this.output);
      await writeJSONFile(distFilepath, value);
    });
  }

  async compile() {
    await this.readAndMapSchemasByAbsolutePath();
    this.toAbsoluteReferencePaths();
    this.initializeDefinitionsIfNot();

    await this.write();
  }
}
