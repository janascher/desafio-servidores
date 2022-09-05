const userList = require("../database");

function updateUser(req, res) {
    const data = userList.saveUser({
        name: req.body.name,
        email: req.body.email,
        deleted: false,
        id: req.body.id,
    });

    if (!data) {
        res.status(400).json({ message: "Falha em atualizar o usuário." });
    } else {
        userList.getUser(data);
        res.status(200).json({ message: "Usuário atualizado com sucesso!" });
    }
}

module.exports = updateUser;
