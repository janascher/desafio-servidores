const users = require("../services/users");

module.exports = function createUserController(req, res) {
    const user = users.saveUser({
        name: req.params.name,
        email: req.params.email,
        deleted: false,
    });
    res.send(user);
};

/* module.exports = function teste(req, res) {
    res.send("Olá mundo");
}; */
