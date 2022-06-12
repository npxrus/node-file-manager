const promises = require('fs/promises');
const path = require('path');
const pathHelper = require('./path.helper');

const up = (src) => {
  if (src === pathHelper.rootDir) {
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

module.exports = { up, cd, ls };
