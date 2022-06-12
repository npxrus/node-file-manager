const readline = require('readline');
const osHelper = require('./helpers/os.helper.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Enter your command> ',
});

const username = process.env.npm_config_username;

const init = () => {
  console.log(`Welcome to the File Manager, ${username}`);

  rl.prompt();
  rl.on('line', (line) => {
    const [command, ...args] = line.trim().split(' ');
    switch (command) {
      case 'os':
        osHelper(args[0]);
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
