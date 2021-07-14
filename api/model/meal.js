const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
    referenceDay: Date,
    mealName: Number,
    nutritionalInfo: {
        carbs: Number,
        proteins: Number,
        fat: Number,
    }
});

module.exports = mongoose.model('meal', mealSchema);