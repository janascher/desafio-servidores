const userList = require("../database");

function listUser(req, res) {
    const data = userList.list();

    if (!data) {
        res.status(400).json({ message: "Falha ao encontrar os usuários." });
    } else {
        res.status(200).json(data);
    }
}

module.exports = listUser;
