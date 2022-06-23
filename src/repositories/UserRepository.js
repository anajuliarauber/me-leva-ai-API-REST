const mongoose = require("mongoose");
const User = mongoose.model("User");

const createUser = async (user) => {
    const response = await User.create(user);
    return response;
}

const findUsers = async () => {
    const response = await User.find();
    return response;
}

const findUserByEmail = async (email) => {
    const response = await User.findOne({email: email});
    return response;
}

const findUserByEmailAndPassword = async (email, password) => {
    const response = await User.findOne({email: email, password: password});
    return response;
}

module.exports = {
    createUser,
    findUsers,
    findUserByEmail,
    findUserByEmailAndPassword
}