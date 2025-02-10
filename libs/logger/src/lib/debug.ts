export function debug(message: string, data?: any): void {
  if (process.env.LOG_LEVEL != 'DEBUG') return;
  console.debug(message);
  if (data != undefined && typeof data === 'object') console.table(data);
}
