const express = require("express");
const route = express.Router();
const getUser = require("../controllers/get_user");
const getUserById = require("../controllers/get_userById");
const createUser = require("../controllers/create_user");
const updateUser = require("../controllers/update_user");
const deleteUser = require("../controllers/delete_user");

route.get("/", getUser); //Lista todos os usuários
route.get("/:id", getUserById); //Lista um usuário específico
route.post("/", createUser); //Cria um usuário
route.put("/:id", updateUser); //Edita as informações de um usuário específico
route.delete("/:id", deleteUser); //Deleta um usuário específico

//Envia os arquivos do Front-end
//route.use(express.static("../public"));

module.exports = route;
