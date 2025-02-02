import { ObjectLiteral } from '../common';
import { ToString } from '../object';

export interface Logger<
  M extends ToString,
  T extends ToString,
  R extends void | Promise<void> = void
> {
  log(msg: M): R;
  log(msg: M, data?: T): R;
  log(title: string, msg: M, data?: T): R;
}

export class BasicLogger implements Logger<string, ObjectLiteral, void> {
  log(msg: string): void;
  log(msg: string, data?: ObjectLiteral | undefined): void;
  log(title: string, msg: string, data?: ObjectLiteral | undefined): void;
  log(title: unknown, msg?: unknown, data?: unknown): void {
    // TODO
  }
}
