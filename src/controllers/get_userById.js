const userList = require("../database");

function listUserById(req, res) {
    const data = req.body;

    if (!data) {
        res.status(400).json({ message: "Falha ao encontrar o usuário." });
    } else {
        res.status(200).json(userList.getUser(data));
    }
}

module.exports = listUserById;
