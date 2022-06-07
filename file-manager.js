import { getUserName } from './helpers/args.helper.js';
import { printGreeting } from './services/log.service.js';

const init = () => {
  const username = getUserName();

  printGreeting(username);
};

init();
