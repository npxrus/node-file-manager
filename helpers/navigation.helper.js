import { promises } from 'fs';
import path from 'path';
import { rootDir } from './path.helper.js';

const up = (src) => {
  if (src === rootDir) {
    return src;
  } else {
    return path.normalize(path.join(src, '/..'));
  }
};

const cd = (src, dest) => {
  if (path.isAbsolute(dest)) {
    return dest;
  } else {
    return path.normalize(path.join(src, dest));
  }
};

const ls = async (src) => {
  try {
    const files = await promises.readdir(src);
    for (const file of files) {
      console.log(file);
    }
  } catch (e) {
    console.error('Operation failed');
  }
};

export { up, cd, ls };
