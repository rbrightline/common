// @index(['./**/*.ts', '!./**/__*/**', '!./**/*{spec,test,story,stories,index,__*}.ts', '!./**/program.ts'], f => `export * from '${f.path}'`)
export * from './init/init';
export * from './json-compiler/for-each-ref';
export * from './json-compiler/ready-schema';
export * from './json-compiler/schema-config';
export * from './json-compiler/schema-manager';
export * from './schema/schema';
export * from './tsc/tsc';
