var mongoose = require('mongoose');

var client = new mongoose.Schema({
	name: String,
	// photo: String,
	address: String,
	body: {
		height: String,
		weight: String,
		BMI: Number,
		bodyFatPercentage: Number
	}
})

module.exports = mongoose.model('Client', client )