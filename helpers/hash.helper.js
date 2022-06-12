const promises = require('fs/promises');

const calculateHash = async (path) => {
  let data;

  try {
    data = await promises.readFile(path);
  } catch (e) {
    console.error('Operation failed');
  }

  const { createHash } = require('crypto');
  const hash = createHash('sha256');

  hash.update(data);
  console.log(hash.digest('hex'));
};

module.exports = calculateHash;
