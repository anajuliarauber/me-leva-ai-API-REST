const userRepository = require("../repositories/UserRepository");
const jwt = require("jsonwebtoken");

const createUser = async (name, telephone, email, password) => {

    try {
        const userExists = await userRepository.findUserByEmail(email);
        if (!name || !telephone || !email || !password) {
            return {
                statusCode: 400,
                data: "Não foi possível criar o usuário. Os parâmetros não foram inseridos corretamente"
            }
        }

        if (userExists) {
            return {
                statusCode: 409,
                data: { message: "Usuário já cadastrado" }
            }
        }

        const user = { name, telephone, email, password }
        await userRepository.createUser(user);
        return {
            statusCode: 200,
            data: user
        }

    } catch (error) {
        return {
            statusCode: 500,
            data: error.message
        }
    }
}

const findUser = async () => {
    try {
        const users = await userRepository.findUsers();
        return {
            statusCode: 200,
            data: users
        }

    } catch (error) {
        return {
            statusCode: 500,
            data: error.message
        }

    }
}

const findUserByEmail = async (email) => {
    try {
        const user = await userRepository.findUserByEmail(email)
        return {
            statusCode: 200,
            data: user
        }

    } catch (error) {
        return {
            statusCode: 500,
            data: error.message
        }

    }
}

const findUserByEmailAndPassword = async (email, password) => {
    try {
        const user = await userRepository.findUserByEmailAndPassword(email, password);
        if (user) {
            return {
                statusCode: 200,
                data: user
            }
        }
        else {
            return {
                statusCode: 404,
                data: { message: 'Usuário não encontrado.' }
            }
        }
    }
    catch (error) {
        return {
            statusCode: 500,
            data: error.message
        }
    }
}

const login = async (payload) => {
    try {
        if (!(payload.email && payload.password)) {
            return {
                statusCode: 400,
                data: "Email ou Senha não informado"
            }
        }

        const user = await userRepository.findUserByEmailAndPassword(payload.email, payload.password);
        if (!user) {
            return {
                statusCode: 500,
                data: "Usuário não encontrado"
            }
        }

        const userData = {
            email: user.email
        }

        const token = jwt.sign({ userData }, "letscode", { expiresIn: 3000 });

        if (token) {
            const data = {
                auth: true,
                token: token,
                user: userData,
            }
            return {
                statusCode: 200,
                data: data
            }
        } else {
            return {
                statusCode: 500,
                data: "Não foi possível gerar o token"
            }
        }


    } catch (error) {
        return {
            statusCode: 500,
            data: error.message
        }
    }
}

module.exports = {
    createUser,
    findUser,
    findUserByEmail,
    findUserByEmailAndPassword,
    login
}