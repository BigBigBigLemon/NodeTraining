const loginCheck = (username, password) => {
  if (username === 'monster' && password === '123') {
    return true;
  }
  return false;
};

module.exports = {
  loginCheck,
};
