const sequence = {
    _id: 1,
    get id() {
        return this._id++;
    },
};

const users = {};

/* function saveUser(user) {
    if (!user.id) user.id = sequence.id;
    users[user.id] = user;
    return user;
} */

//Usuário por ID
function getUser(id) {
    return users[id] || {};
}

//Todos os usuários
//Gera somente usuário que possuem o atributo deleted=false
function getUsers() {
    const users_enables = [];

    for (i in users) {
        if (users[i].deleted === false) {
            users_enables.push(users[i]);
        }
    }
    return Object.values(users_enables);
}

//Deleta o usuário
function deleteUser(nid) {
    for (i in users) {
        if (users[i].id == nid) {
            users[i].deleted = true;
            return users[i];
        }
    }
}

module.exports = {saveUser, getUser, getUsers, deleteUser}