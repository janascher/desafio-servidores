const users = require("../services/users");

module.exports = function getUsersController(req, res) {
    const user = users.getUsers();
    res.send(user);
};
