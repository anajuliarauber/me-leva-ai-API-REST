const express = require("express");
const routerUsers = express.Router();
const UserController = require("../controllers/UserController")

const verifyToken = require("../utils/verifyToken")

routerUsers.post("/", UserController.createUser);
routerUsers.get("/", verifyToken, UserController.findUser);
routerUsers.get("/:email", verifyToken, UserController.findUserByEmail);
routerUsers.get('/:email/:password', verifyToken, UserController.findUserByEmailAndPassword);
routerUsers.post('/login', UserController.login);

module.exports = routerUsers;
