const RideService = require("../services/RideService")

const createRide = async (req, res) => {
    const ride = req.body;
    const response = await RideService.createRide(ride)
    res.status(response.statusCode).json(response.data)
}

const getRide = async (req, res) => {
    const response = await RideService.getRide()
    res.status(response.statusCode).json(response.data);
}

const startRide = async (req, res) => {
    const id = req.params.id;
    const response = await RideService.startRide(id);
    res.status(response.statusCode).json(response.data);
}

const finishRide = async (req, res) => {
    const id = req.params.id;
    const response = await RideService.finishRide(id);
    res.status(response.statusCode).json(response.data);
}

module.exports = {
    createRide,
    getRide,
    startRide,
    finishRide
}