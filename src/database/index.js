const fs = require("fs");
const path = __dirname + "/data.json";

function loadData() {
    console.log(path);
    //Se não existir o arquivo "data.json", crie-o.
    if (!fs.existsSync(path)) {
        fs.writeFileSync(path, "[]");
    }

    const fileText = fs.readFileSync(path);
    userList = JSON.parse(fileText);
    console.log(userList);
}

let userList = [];

//Lista de usuários
function list() {
    return userList;
}

//Cria um usuário
function add(data) {
    data.id = userList.length + 1;
    data.deleted = false;
    userList.push(data);
    fs.writeFile(path, JSON.stringify(userList), () => {});
}

//Usuário por ID
function getUser(userId) {
    for (i in userList) {
        if (userList[i].id == userId.id) {
            return userList[i];
        }
    }
}

//Salva as informações alteradas do usuário
function saveUser(updateUser) {
    for (i in userList) {
        if (userList[i].id == updateUser.id) {
            userList[i].name = updateUser.name;
            userList[i].email = updateUser.email;
            fs.writeFile(path, JSON.stringify(userList), () => {});
            return userList[i];
        }
    }
}

//Altera o status de deleted=false para true
function remove(removeId) {
    for (i in userList) {

        if (userList[i].id == removeId.id) {
            userList[i].deleted = true;
            fs.writeFile(path, JSON.stringify(userList), () => {});
            return userList[i];
        }
    }
}

loadData();

module.exports = { list, add, getUser, saveUser, remove };
