import os from 'os';
import path from 'path';

const rootDir = os.homedir();

const isCorrectPath = (root, dir) => {
  const relative = path.relative(root, dir);
  return relative && !relative.startsWith('..') && !path.isAbsolute(relative);
};

export { rootDir, isCorrectPath };
