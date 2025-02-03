import { AnsiBgColor, AnsiColor } from '@rline/color';
import {
  Logger as ILogger,
  Log,
  LogLevel,
  ObjectLiteral,
  ToString,
} from '@rline/type';
import EventEmitter from 'events';

export class Logger extends EventEmitter implements ILogger {
  constructor(
    protected context = 'LOG',
    protected level: LogLevel = LogLevel.LOG
  ) {
    super();
  }

  protected timestamp() {
    return new Date().toISOString();
  }

  protected printTimestamp(value: Date) {
    return `| ${AnsiColor.green}(${value.toISOString()})${AnsiColor.reset} `;
  }

  private __color(loglevel: LogLevel): string {
    switch (loglevel) {
      case LogLevel.LOG:
        return `${AnsiColor.white}`;
      case LogLevel.INFO:
        return `${AnsiColor.blue}`;
      case LogLevel.WARN:
        return `${AnsiColor.orange}`;
      case LogLevel.ERROR:
      case LogLevel.FATAL:
        return `${AnsiColor.red}`;
      case LogLevel.DEBUG:
        return `${AnsiColor.white}`;
    }
  }

  private __resetColor() {
    return `${AnsiBgColor.reset}${AnsiColor.reset}`;
  }

  private __context(level: LogLevel, title: ToString) {
    return `${this.__color(level)}[ ${title
      .toString()
      .toLocaleUpperCase()} ]${this.__resetColor()}`;
  }

  private __log(
    level: LogLevel,
    title: ToString,
    message?: ToString,
    data?: ObjectLiteral
  ): void {
    const date = new Date();

    const timestamp = this.printTimestamp(date);
    if (this.level > LogLevel.LOG) return;

    if (message) {
      console.log(
        `${this.__context(level, title)} ${message} ${this.printTimestamp(
          date
        )}`
      );
    } else {
      console.log(
        `${this.__context(level, this.context ?? level)} ${title} ${timestamp}`
      );
    }

    if (data) console.table(data);

    this.emit(`${level}`, {
      context: this.context,
      message,
      data,
      level,
      timestamp: date,
    } as Log);
  }

  log(title: ToString, message?: ToString, data?: ObjectLiteral): void {
    this.__log(LogLevel.LOG, title, message, data);
  }

  error(title: ToString, message?: ToString, data?: ObjectLiteral): void {
    this.__log(LogLevel.ERROR, title, message, data);
  }

  info(title: ToString, message?: ToString, data?: ObjectLiteral): void {
    this.__log(LogLevel.INFO, title, message, data);
  }

  warn(title: ToString, message?: ToString, data?: ObjectLiteral): void {
    this.__log(LogLevel.WARN, title, message, data);
  }

  fatal(title: ToString, message?: ToString, data?: ObjectLiteral): void {
    this.__log(LogLevel.FATAL, title, message, data);
  }

  debug(title: ToString, message?: ToString, data?: ObjectLiteral): void {
    this.__log(LogLevel.DEBUG, title, message, data);
  }
}
