import { __mkdir } from './__fs__';

export async function mkdir(...directories: string[]): Promise<void> {
  if (directories.length > 1) {
    await Promise.all<void>(directories.map((e) => mkdir(e)));
  } else if (directories.length == 1) {
    await new Promise<void>((res, rej) => {
      __mkdir(directories[0], { recursive: true }, (error, path) => {
        if (error) {
          rej({ error, path });
        } else {
          res();
        }
      });
    });
  }
}
