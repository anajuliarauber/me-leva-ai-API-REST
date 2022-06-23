const userRouters = require('./UserRoutes');
const vehicleRouters = require("./VehicleRoutes")
const rideRouters = require("./RideRoutes")
const express = require('express');
const router = express.Router();

router.use("/user", userRouters);
router.use("/vehicle", vehicleRouters)
router.use("/ride", rideRouters)

module.exports = router;