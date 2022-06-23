const VehicleRepository = require("../repositories/VehicleRepository")

const createVehicle = async (model, licensePlate, status) => {
    try {
        console.log(model, licensePlate, status)
        if (!model || !licensePlate || !status) {
            return {
                statusCode: 400,
                data: "Não foi possível criar o veículo, os parâmetros não foram informados corretamente"
            }
        }

        const createdVehicle = await VehicleRepository.findVehicleByLicensePlate(licensePlate);
        if (createdVehicle) {
            return {
                statusCode: 409,
                data: "Veículo já cadastrado"
            }
        }
        const vehicle = await VehicleRepository.createVehicle(model, licensePlate, status);
        return {
            statusCode: 200,
            data: vehicle
        }
    } catch (error) {
        return {
            statusCode: 500,
            data: error.message
        }
    }
}

const findVehicleByLicensePlate = async (licensePlate) => {
    if (!licensePlate) {
        return {
            statusCode: 400,
            data: "Parâmetro placa do veículo não inserido"
        }
    }

    try {
        const vehicle = await VehicleRepository.findVehicleByLicensePlate(licensePlate)
        return {
            statusCode: 200,
            data: vehicle
        }
    } catch (error) {
        return {
            statusCode: 500,
            data: error.message
        }
    }
}

const findVehicles = async () => {
    try {
        const vehicles = await VehicleRepository.findVehicles();
        return {
            statusCode: 200,
            data: vehicles
        }
    } catch (error) {
        return {
            statusCode: 500,
            data: error.message
        }
    }
}

module.exports = {
    createVehicle,
    findVehicles,
    findVehicleByLicensePlate
}