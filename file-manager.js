const readline = require('readline');
const osHelper = require('./helpers/os.helper.js');
const hashHelper = require('./helpers/hash.helper.js');
const zipHelper = require('./helpers/zip.helper');
const fileHelper = require('./helpers/file.helper.js');
const pathHelper = require('./helpers/path.helper.js');

const username = process.env.npm_config_username;
const root = pathHelper.rootDir;
let currentDirectory = root;

const rl = readline.createInterface({
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
      case 'cat':
        fileHelper.read(args[0]);
        break;
      case 'add':
        fileHelper.add(args[0], currentDirectory);
        break;
      case 'rn':
        fileHelper.rename(args[0], args[1]);
        break;
      case 'cp':
        fileHelper.copy(args[0], args[1]);
        break;
      case 'mv':
        fileHelper.move(args[0], args[1]);
        break;
      case 'rm':
        fileHelper.remove(args[0]);
        break;
      case 'os':
        osHelper(args[0]);
        break;
      case 'hash':
        hashHelper(args[0]);
        break;
      case 'compress':
        zipHelper.compress(args[0], args[1]);
        break;
      case 'decompress':
        zipHelper.decompress(args[0], args[1]);
        break;
      case '.exit':
        console.log(`Thank you for using File Manager, ${username}!`);
        process.exit(0);
    }
    rl.prompt();
  }).on('close', () => {
    console.log(`\nThank you for using File Manager, ${username}!`);
    process.exit(0);
  });
};

init();
