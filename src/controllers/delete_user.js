const userList = require("../database");

function removeUser(req, res) {
    const data = req.body;

    if (!data) {
        res.status(400).json({ message: "Falha ao remover o usuário." });
    } else {
        userList.remove(data);
        res.status(200).json({ message: "Usuário removido com sucesso!" });
    }
}

module.exports = removeUser;
