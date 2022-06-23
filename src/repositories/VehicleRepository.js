const mongoose = require('mongoose');
const Vehicle = mongoose.model('Vehicle');



const createVehicle = async (model, licensePlate, status) => {
    console.log(model, licensePlate, status);
    const vehicle = { model, licensePlate, status };
    const response = await Vehicle.create(vehicle);
    return response;
}

const findVehicleByLicensePlate = async (licensePlate) => {
    const response = await Vehicle.findOne({ licensePlate: licensePlate });
    return response;
}

const findVehicles = async () => {
    const response = await Vehicle.find();
    return response;
}

module.exports = {
    createVehicle,
    findVehicleByLicensePlate,
    findVehicles
}