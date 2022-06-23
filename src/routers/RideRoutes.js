const RideController = require("../controllers/RideController");
const express = require("express");
const rideRouter = express.Router();

rideRouter.post("/", RideController.createRide);
rideRouter.get("/", RideController.getRide);
rideRouter.patch("/start-ride/:id", RideController.startRide);
rideRouter.patch("/finish-ride/:id", RideController.finishRide);

module.exports = rideRouter
