const ping = require('./ping');
const login = require('./login');
const me = require('./me');
const topSecret = require('./top-secret');
const { createUser } = require('./createUser');

module.exports = {
  ping,
  login,
  me,
  topSecret,
  createUser,
};
