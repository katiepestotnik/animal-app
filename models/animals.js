const mongoose = require('../models/connection.js');
//how can i use an array for location for example?
const animalsSchema = new mongoose.Schema({
    species: String,
    extinct: Boolean,
    location: String,
    lifeExpectancy: Number
});
const Animal = mongoose.model('Animal', animalsSchema);
module.exports = Animal;