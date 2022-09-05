const userList = require("../database");

function service() {
    //const list = new userList();

    function remove(delId) {
        const result = {
            success: false,
            message: "Falha ao remover o usuário.",
            data: null,
        };

        console.log(`service: ${userList.remove(delId)}`);

        //if (!userList.remove(delId)) {
        for (i in userList) {
            if (userList[i].id !== delId.id) {
                result.message = "Falha ao encontrar o usuário.";
                return result;
            }
        }

        result.success = true;
        result.message = "Usuário removido com sucesso!";
        result.data = userList.remove(delId);

        return result;
    }

    return { remove };
}

module.exports = service;
