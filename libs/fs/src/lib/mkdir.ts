import { __mkdir } from './__fs__';

export async function mkdir(directory: string): Promise<void> {
  return new Promise((res, rej) => {
    __mkdir(directory, { recursive: true }, (err, path) => {
      if (err) {
        rej(err);
      } else {
        res();
      }
    });
  });
}
