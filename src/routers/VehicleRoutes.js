const VehicleController = require("../controllers/VehicleController");
const express = require("express");
const routerVehicle = express.Router();

routerVehicle.post("/", VehicleController.createVehicle);
routerVehicle.get("/:licensePlate", VehicleController.findVehicleByLicensePlate)
routerVehicle.get("/", VehicleController.findVehicles);

module.exports = routerVehicle;