const users = require("../services/users");

module.exports = function deleteUserController(req, res) {
    const user = users.deleteUser(req.params.id);
    res.send(user);
};
