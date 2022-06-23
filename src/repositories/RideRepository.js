const { json } = require("express");
const mongoose = require("mongoose");
const RideStatus = require("../models/Ride");

const Ride = mongoose.model("Ride");

const createRide = async (ride) => {
    const response = await Ride.create(ride);
    return response
}

const getRides = async () => {
    const response = await Ride.find();
    return response;
}

const startRide = async (id) => {
    const update = { 
        "status": RideStatus.STARTED,
        "startTime": Date.now()
    };
    const response = await Ride.findByIdAndUpdate(id, update, { new: true });
    return response;
}

const finishRide = async (id) => {
    const update = { 
        "status": RideStatus.FINISHED,
        "finishTime": Date.now()
 };
    const response = await Ride.findByIdAndUpdate(id, update, { new: true });
    return response;
}


// validar o status de uma corrida por usuário
// filtrar corridas de usuario por: asked ou started

module.exports = {
    createRide,
    getRides,
    startRide, 
    finishRide
}