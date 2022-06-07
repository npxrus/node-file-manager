import { dirname } from 'path';
import { fileURLToPath } from 'url';

const getDirectoryPath = () => {
  const filename = fileURLToPath(import.meta.url);

  return dirname(filename);
};

export { getDirectoryPath };
