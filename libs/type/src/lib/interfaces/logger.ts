import { ObjectLiteral } from '../common';
import { ToString } from '../object';
import { IP } from '../string';

export type Log = {
  appname?: string;
  context?: string;
  message?: ToString;
  timestamp?: Date;
  level?: LogLevel;
  userId?: string;
  requestId?: number;
  data?: ObjectLiteral;
  ip?: IP;
};

/**
 * Configure the behaviour of logger
 *
 *````markdown
 * |------------------------------------------|
 * | Name      | Display Only                 |
 * |-----------|------------------------------|
 * | LOG       | ALL                          |
 * | INFO      | INFO, WARN, ERROR, FATAL     |
 * | WARN      | WARN, ERROR, FATAL           |
 * | ERROR     | ERROR, FATA                  |
 * | FATAL     | FATAL                        |
 * |------------------------------------------|
 *````
 */
export enum LogLevel {
  /**
   * log everything
   */
  LOG = 0,

  /**
   * log everthing but log
   */
  INFO,

  /**
   * log everything excluding log, info
   */
  WARN,

  /**
   * Log error and fatal
   */
  ERROR,

  /**
   * log fatal only
   */
  FATAL,

  /**
   * only debug
   */
  DEBUG,
}

export interface Logger {
  log(message: ToString): void;
  log(message: ToString, data?: ObjectLiteral): void;
  log(title: ToString, message?: ToString, data?: ObjectLiteral): void;

  error(message: ToString): void;
  error(message: ToString, data?: ObjectLiteral): void;
  error(title: ToString, message?: ToString, data?: ObjectLiteral): void;

  info(message: ToString): void;
  info(message: ToString, data?: ObjectLiteral): void;
  info(title: ToString, message?: ToString, data?: ObjectLiteral): void;

  warn(message: ToString): void;
  warn(message: ToString, data?: ObjectLiteral): void;
  warn(title: ToString, message?: ToString, data?: ObjectLiteral): void;

  fatal(message: ToString): void;
  fatal(message: ToString, data?: ObjectLiteral): void;
  fatal(title: ToString, message?: ToString, data?: ObjectLiteral): void;

  debug(message: ToString): void;
  debug(message: ToString, data?: ObjectLiteral): void;
  debug(title: ToString, message?: ToString, data?: ObjectLiteral): void;
}
