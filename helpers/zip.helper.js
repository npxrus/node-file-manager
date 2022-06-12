import path from 'path';
import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip, createGunzip } from 'zlib';

const compress = async (src, dest) => {
  const archivePath = path.join(dest, path.parse(src).base + '.gz');

  try {
    await pipeline(
      createReadStream(src),
      createGzip(),
      createWriteStream(archivePath)
    );
  } catch (e) {
    console.error('Operation failed');
  }
};

const decompress = async (src, dest) => {
  try {
    await pipeline(
      createReadStream(src),
      createGunzip(),
      createWriteStream(dest)
    );
  } catch (e) {
    console.error('Operation failed');
  }
};

export { compress, decompress };
