const { readDB, writeDB } = require('../../infrastructure/db');

class UserService {
  static getAllUsers() {
    return readDB().users || [];
  }

  static createUser(username, email) {
    const users = this.getAllUsers();
    const newUser = { id: users.length + 1, username, email };
    users.push(newUser);
    writeDB({ users });
    return newUser;
  }
}

module.exports = UserService;
