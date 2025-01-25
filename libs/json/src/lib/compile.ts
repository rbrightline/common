import { argv } from 'process';
import { compileJSONSchema } from './compile-json-schema';

const [, , rootDir, mainFileName, bundleName] = argv;

compileJSONSchema(rootDir, mainFileName, bundleName);
