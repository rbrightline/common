# @rline/schema

This is the schema project directory. The `model.schema.json` is the main schema file configured in `schema.config.json`. The `bundle.schema.json` is the output of `json schema` command. The `bundle.schema.ts` is the output of `json tsc` command. The `json tsc` command depends on the `json schema` command becuase the `tsc` is reading schema from the `bundle.schema.json`. If you want to use `json tsc` with already compiled schema, then update the `[schema.config.json].output.scheme` property.
