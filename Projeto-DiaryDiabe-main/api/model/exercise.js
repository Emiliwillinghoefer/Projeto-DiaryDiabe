const mongoose = require('mongoose');

const exercise = new mongoose.Schema({
    referenceDay: Date,
    name: String,
    duration: Number,
    info: String,
});

module.exports = mongoose.model('exercise', exerciseSchema);