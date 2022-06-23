const RideRepository = require("../repositories/RideRepository");
const UserRepository = require("../repositories/UserRepository");
const VehicleRepository = require("../repositories/VehicleRepository")

const createRide = async (ride) => {
    const { user, vehicle, startPlace, finishPlace, status } = ride;
    const { email } = user;
    const { licensePlate } = vehicle;

    try {
        if (user) {
            if (email) {
                const findUser = await UserRepository.findUserByEmail(email);
                if (!findUser) {
                    return {
                        statusCode: 402,
                        data: "O usuário não está cadastrado na base de dados"
                    }
                }
            }
            else {
                return {
                    statusCode: 409,
                    data: "O email do usuário não foi informado"
                }
            }
        } else {
            return {
                statusCode: 409,
                data: "O parâmetro usuário não foi informado"
            }
        }

        if (vehicle) {
            if (licensePlate) {
                const findVehicle = await VehicleRepository.findVehicleByLicensePlate(licensePlate)
                if (!findVehicle) {
                    return {
                        statusCode: 402,
                        data: "O veículo não está cadastrado na base de dados"
                    }
                }
            } else {
                return {
                    statusCode: 409,
                    data: "A placa do veículo não foi informado"
                }
            }

        } else {
            return {
                statusCode: 409,
                data: "O parâmetro veículo não foi informado"
            }
        }

        const response = await RideRepository.createRide(ride);
        return {
            statusCode: 200,
            data: response
        }

    } catch (error) {
        return {
            statusCode: 500,
            data: error.message
        }
    }
}

const getRide = async () => {
    try {
        const response = await RideRepository.getRides()
        return {
            statusCode: 200,
            data: response
        }

    } catch (error) {
        return {
            statusCode: 500,
            data: error.message
        }
    }
}

const startRide = async (id) => {
    try {
        if (!id) {
            return {
                statusCode: 400,
                data: "Não foi possível iniciar a corrida. O id não foi inserido corretamente"
            }
        } else {
            const response = await RideRepository.startRide(id);
            return {
                statusCode: 200,
                data: response
            }
        }

    } catch (error) {
        return {
            statusCode: 500,
            data: error.message
        }
    }
}

const finishRide = async (id) => {
    try {
        if (!id) {
            return {
                statusCode: 400,
                data: "Não foi possível finalizar a corrida. O id não foi inserido corretamente"
            }
        } else {
            const response = await RideRepository.finishRide(id);
            return {
                statusCode: 200,
                data: response
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
    createRide,
    getRide,
    startRide, 
    finishRide
}
