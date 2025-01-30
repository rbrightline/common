/**
 * This function allows us to return the value from try-catch block
 * Try to execute the function ,
 * if error, then run the error callback or return null
 * @param handler
 * @param error optional error handler by default it returns null
 * @returns
 */
export async function tryCatch<T>(
  handler: () => Promise<T>,
  error?: (err?: any) => Promise<T>
) {
  try {
    return await handler();
  } catch (err: unknown) {
    if (error) return error(err);
    return null;
  }
}
