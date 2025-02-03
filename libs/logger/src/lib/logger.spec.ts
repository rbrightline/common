import { LogLevel } from '@rline/type';
import { Logger } from './logger';

describe('logger', () => {
  const logger = new Logger('Test', LogLevel.LOG);

  it('should work', () => {
    logger.log('log level', 'log message goes here');
    logger.info('info level', 'info message goes here');
    logger.warn('warn level', 'warn message goes here');
    logger.error('error level', 'error message goes here');
    logger.fatal('fatal level', 'fatal message goes here');
    logger.debug('debug level', 'debug message goes here');
    logger.log('log level', 'log message goes here');

    logger.info('info message goes here');
    logger.warn('warn message goes here');
    logger.error('error message goes here');
    logger.fatal('fatal message goes here');
    logger.debug('debug message goes here');

    logger.info('info message goes here', undefined, { some: "some'" });
    logger.warn('warn message goes here', undefined, {
      some: 'some',
      other: 'other',
      count: 1,
    });
    logger.error('error message goes here', undefined, {
      some: 'some',
      other: 'other',
      count: 1,
    });
    logger.fatal('fatal message goes here', undefined, {
      some: 'some',
      other: 'other',
      count: 1,
    });
    logger.debug('debug message goes here', undefined, {
      some: 'some',
      other: 'other',
      count: 1,
    });
  });
});
