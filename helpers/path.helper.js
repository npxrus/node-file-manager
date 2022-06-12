const os = require('os');
const path = require('path');

const rootDir = os.homedir();

const isCorrectPath = (root, dir) => {
  const relative = path.relative(root, dir);
  return relative && !relative.startsWith('..') && !path.isAbsolute(relative);
};

module.exports = { rootDir, isCorrectPath };
