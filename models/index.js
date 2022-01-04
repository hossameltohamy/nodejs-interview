const Users = require('./users');
const users = {
  // TODO: connect to proper API later
  get: (id) => Users.get(id),
};

module.exports = {
  users,
};
