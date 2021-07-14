const mongoose = require('mongoose');

const bloodGlucose = new mongoose.Schema({
    referenceDay: Date,
    glucoseMeasurement: Number,
});

module.exports = mongoose.model('glucoseMeasurement', bloodGlucose);