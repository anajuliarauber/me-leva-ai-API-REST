const VehicleService = require("../services/VehicleService");

const createVehicle = async (req, res) => {
    const { model, licensePlate, status} = req.body;
    const response = await VehicleService.createVehicle(model, licensePlate, status);
    res.status(response.statusCode).json(response.data);
}

const findVehicleByLicensePlate = async (req, res) => {
    const { licensePlate } = req.params;
    const response = await VehicleService.findVehicleByLicensePlate(licensePlate);
    res.status(response.statusCode).json(response.data);
}

const findVehicles = async (req, res) => {
    const response = await VehicleService.findVehicles();
    res.status(response.statusCode).json(response.data);
}

module.exports = {
    createVehicle,
    findVehicleByLicensePlate,
    findVehicles
}