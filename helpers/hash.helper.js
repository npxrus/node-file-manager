import { promises } from 'fs';

const calculateHash = async (path) => {
  let data;

  try {
    data = await promises.readFile(path);
  } catch (e) {
    console.error('Operation failed');
  }

  const { createHash } = await import('crypto');
  const hash = createHash('sha256');

  hash.update(data);
  console.log(hash.digest('hex'));
};

export default calculateHash;
