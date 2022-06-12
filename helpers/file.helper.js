import { constants, promises } from 'fs';
import path from 'path';

const read = async (src) => {
  try {
    const fileContent = await promises.readFile(src);
    console.log(fileContent.toLocaleString());
  } catch (e) {
    console.error('Operation failed');
  }
};

const add = async (fileName, src) => {
  try {
    await promises.stat(path.join(src, fileName));
    console.error('Operation failed');
  } catch (e) {
    await promises.writeFile(path.join(src, fileName), '');
  }
};

const rename = async (src, newFileName) => {
  const newFilePath = path.join(path.parse(src).dir, newFileName);

  if (await promises.stat(newFilePath)) {
    console.error('Operation failed');
  }

  try {
    await promises.rename(src, newFilePath);
  } catch (e) {
    console.error('Operation failed');
  }
};

const copy = async (src, dest) => {
  const newPath = path.join(dest, path.parse(src).base);

  try {
    await promises.copyFile(src, newPath, constants.COPYFILE_EXCL);
  } catch (e) {
    console.error(e.message);
  }
};

const remove = async (src) => {
  try {
    await promises.rm(src);
  } catch (e) {
    console.error('Operation failed');
  }
};

const move = async (src, dest) => {
  copy(src, dest);
  remove(src);
};

export { add, read, rename, copy, move, remove };
