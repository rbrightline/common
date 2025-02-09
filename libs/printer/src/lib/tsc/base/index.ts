// @index(['./**/*.ts', '!./**/__*/**', '!./**/*{spec,test,story,stories,index,__*}.ts', '!./**/program.ts', '!./**/test'], f => `export * from '${f.path}'`)
export * from './base-tsc-class-printer';
export * from './base-tsc-comment.printer';
export * from './base-tsc-decorator-printer';
export * from './base-tsc-import-printer';
export * from './base-tsc-property-printer';
export * from './base-tsc-type-printer';
