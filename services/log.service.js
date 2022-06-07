const printGreeting = (name) => {
  console.log(`Welcome to the File Manager, ${name}!`);
};

const printGoodbye = (name) => {
  console.log(`Thank you for using File Manager, ${name}!`);
};

const printWorkingDirectory = (path) => {
  console.log(`You are currently in ${path}`);
};

export { printGreeting, printGoodbye, printWorkingDirectory };
