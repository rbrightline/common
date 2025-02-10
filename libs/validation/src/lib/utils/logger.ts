import { Logger } from '@rline/logger';
import { LogLevel } from '@rline/type';

export const { debug, log } = new Logger('Validation', LogLevel.DEBUG);
