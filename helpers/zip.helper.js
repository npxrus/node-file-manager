const path = require('path');
const { pipeline } = require('stream/promises');
const { createReadStream, createWriteStream } = require('fs');
const { createGzip, createGunzip } = require('zlib');

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

module.exports = { compress, decompress };
