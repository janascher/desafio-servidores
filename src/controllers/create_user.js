const userList = require("../database");

function createUser(req, res) {
    const data = req.body;

    if (!data) {
        res.status(400).json({ message: "Falha ao cadastrar usuário." });
    } else {
        userList.add(data);
        res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
    }
}

module.exports = createUser;
