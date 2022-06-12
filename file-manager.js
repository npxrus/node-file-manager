import { createInterface } from 'readline';

import osHelper from './helpers/os.helper.js';
import calculateHash from './helpers/hash.helper.js';
import { compress, decompress } from './helpers/zip.helper.js';
import {
  add,
  read,
  remove,
  rename,
  move,
  copy,
} from './helpers/file.helper.js';
import { rootDir } from './helpers/path.helper.js';
import { up, cd, ls } from './helpers/navigation.helper.js';

const username = process.env.npm_config_username;
const root = rootDir;
let currentDirectory = root;

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: `You are currently in ${currentDirectory}\nEnter your command> `,
});

const init = () => {
  console.log(`Welcome to the File Manager, ${username}`);

  rl.prompt();
  rl.on('line', (line) => {
    const [command, ...args] = line.trim().split(' ');
    switch (command) {
      case 'up':
        currentDirectory = up(currentDirectory);
        rl.setPrompt(
          `You are currently in ${currentDirectory}\nEnter your command> `
        );
        break;
      case 'cd':
        currentDirectory = cd(currentDirectory, args[0]);
        rl.setPrompt(
          `You are currently in ${currentDirectory}\nEnter your command> `
        );

        break;
      case 'ls':
        ls(currentDirectory);
        rl.setPrompt(
          `You are currently in ${currentDirectory}\nEnter your command> `
        );
        break;
      case 'cat':
        read(args[0]);
        break;
      case 'add':
        add(args[0], currentDirectory);
        break;
      case 'rn':
        rename(args[0], args[1]);
        break;
      case 'cp':
        copy(args[0], args[1]);
        break;
      case 'mv':
        move(args[0], args[1]);
        break;
      case 'rm':
        remove(args[0]);
        break;
      case 'os':
        osHelper(args[0]);
        break;
      case 'hash':
        calculateHash(args[0]);
        break;
      case 'compress':
        compress(args[0], args[1]);
        break;
      case 'decompress':
        decompress(args[0], args[1]);
        break;
      case '.exit':
        console.log(`Thank you for using File Manager, ${username}!`);
        process.exit(0);
      default:
        console.error('Invalid input');
        break;
    }
    rl.prompt();
  }).on('close', () => {
    console.log(`\nThank you for using File Manager, ${username}!`);
    process.exit(0);
  });
};

init();
