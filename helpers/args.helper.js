const getUserName = () => {
  return process.env.npm_config_username;
};

export { getUserName };
