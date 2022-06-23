const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema({
    user: {
        type: Object,
        required: true
    },

    vehicle: {
        type: Object,
        required: true
    },

    startPlace: {
        type: String,
        required: true
    },

    finishPlace: {
        type: String,
        required: true
    },

    status: {
        type: String,
        required: true
    },

    startTime: {
        type: Date,
        required: false
    },

    finishTime: {
        type: Date,
        required: false
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
})

mongoose.model("Ride", rideSchema);

const RideStatus = {
    STARTED: 'started',
    FINISHED: 'finished'
};

module.exports = RideStatus;