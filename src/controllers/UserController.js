const { response } = require("express");
const userService = require("../services/UserService");

const createUser = async (req, res) => {
    const { name, telephone, email, password } = req.body;
    const response = await userService.createUser(name, telephone, email, password);
    return res.status(response.statusCode).json(response.data);
}

const findUser = async (req, res) => {
    const response = await userService.findUser();
    return res.status(response.statusCode).json(response.data);
}

const findUserByEmail = async (req, res) => {
    const { email } = req.params;
    const response = await userService.findUserByEmail(email)
    return res.status(response.statusCode).json(response.data);
}

const findUserByEmailAndPassword = async (req, res) => {
    const { email, password } = req.params;
    const response = await userService.findUserByEmailAndPassword(email, password);
    return res.status(response.statusCode).json(response.data);
}

const login = async (req, res) => {
    const { body } = req;
    const response = await userService.login(body)
    return res.status(response.statusCode).json(response.data);
}

module.exports = {
    createUser,
    findUser,
    findUserByEmail,
    findUserByEmailAndPassword,
    login
}