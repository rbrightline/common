import { getConfig, SchemaManager } from '../util';

/**
 * JSON [schema](http://json-schema.org/draft-07/schema#) compiler
 */
export async function schema() {
  const config = await getConfig();

  const schemaMangaer = new SchemaManager({
    mainFilePath: config.main,
    output: config.output.schema,
    rootPath: config.root,
  });

  await schemaMangaer.compile();
}
