/**
 * try-catch wrapper with return value. By default, return null on errors
 * @param handler
 * @param error optional error handler by default it returns null
 * @returns
 */
export async function tryCatch<T>(
  handler: () => Promise<T>,
  error?: (err?: any) => Promise<T>
): Promise<T | null> {
  try {
    return await handler();
  } catch (err: unknown) {
    if (error) return error(err);
    return null;
  }
}
