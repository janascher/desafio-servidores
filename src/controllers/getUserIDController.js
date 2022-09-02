const users = require("../services/users");

module.exports = function getUserIDController(req, res) {
    const user = users.getUser(req.params.id);
    res.send(user);
};