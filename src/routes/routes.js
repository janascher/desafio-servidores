const express = require("express");
const route = express.Router();
const getUsersController = require("../controllers/getUsersController");
const getUserIDController = require("../controllers/getUserIDController");
const createUserController = require("../controllers/createUserController");
const updateUserController = require("../controllers/updateUserController");
const deleteUserController = require("../controllers/deleteUserController");
//const teste = require("../controllers/createUser");
//const users = require("../services/users");

route.get("/:list", getUsersController); //Lista todos os usuários
route.get("/:id", getUserIDController); //Lista o usuário por ID
route.post("/:name/:email", createUserController); //Cria usuário
route.put("/:id", updateUserController); //Edita as informações do usuário
route.delete("/:id", deleteUserController); //Deleta o usuário

//Envia os arquivos do Front-end
//route.use(express.static("../public"));

module.exports = route;
