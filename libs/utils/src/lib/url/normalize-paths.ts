export function normalizePaths(path: string) {
  return path.replace(/\\|\\\\/g, '/').replace(/\/\//g, '/');
}
